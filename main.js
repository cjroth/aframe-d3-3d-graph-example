var graph = buildGraph(20, 40, 5, 5)

var color = d3.scale.category20()

var scene = d3.select('a-scene')

var width = scene.attr('width')
var height = scene.attr('height')

var force = d3.layout.force3D()
	.charge(-5)
	.linkDistance(1)
    .size([width, height, height])

force
    .nodes(graph.nodes)
    .links(graph.links)
    .start()

var link = scene
    .selectAll('a-entity')
    .filter('.link')
    .data(graph.links)
    .enter().append('a-entity')
    .attr('class', 'link')

var node = scene
    .selectAll('a-sphere')
	.data(graph.nodes)
	.enter().append('a-sphere')
	.attr('class', 'node')
	.attr('radius', 1)
	.attr('color', d => color(d.group))

force.on('tick', function() {
	node.attr('position', d => `${d.x} ${d.y} ${d.z}`)
    link.attr('meshline', d => {
        let sourcePoint = point(d.source)
        let targetPoint = point(d.target)
        return `lineWidth: 1; path: ${sourcePoint.join(' ')}, ${targetPoint.join(' ')}}; color: #ccc`
    })
})

function point(p) {
    return [p.x, p.y, p.z]
}

function buildGraph(nodes, links, groups, maxWeight) {

    let data = {
        nodes: [],
        links: []
    }

    for (let n = 0; n < nodes; n++) {
        data.nodes.push({
            id: n,
            group: _.random(1, groups)
        })
    }

    for (let l = 0; l < links; l++) {
        data.links.push({
            source: _.random(0, nodes - 1),
            target: _.random(0, nodes - 1),
            value: _.random(1, maxWeight)
        })
    }

    return data

}

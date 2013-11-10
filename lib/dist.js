var SparkJS = require('./spark')
var constraint = require('./constraint')

require('./objects')

window.Vec2 = require('./vec2')
window.SparkJS = SparkJS

window.Particle = SparkJS.Particle

window.DistanceConstraint = constraint.DistanceConstraint
window.PinConstraint      = constraint.PinConstraint
window.AngleConstraint    = constraint.AngleConstraint



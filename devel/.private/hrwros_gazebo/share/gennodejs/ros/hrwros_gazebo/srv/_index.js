
"use strict";

let GetMaterialLocations = require('./GetMaterialLocations.js')
let ConveyorBeltControl = require('./ConveyorBeltControl.js')
let AGVControl = require('./AGVControl.js')
let SubmitTray = require('./SubmitTray.js')
let PopulationControl = require('./PopulationControl.js')
let VacuumGripperControl = require('./VacuumGripperControl.js')

module.exports = {
  GetMaterialLocations: GetMaterialLocations,
  ConveyorBeltControl: ConveyorBeltControl,
  AGVControl: AGVControl,
  SubmitTray: SubmitTray,
  PopulationControl: PopulationControl,
  VacuumGripperControl: VacuumGripperControl,
};

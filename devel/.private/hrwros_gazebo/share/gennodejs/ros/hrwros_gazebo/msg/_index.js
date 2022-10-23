
"use strict";

let Order = require('./Order.js');
let KitObject = require('./KitObject.js');
let KitTray = require('./KitTray.js');
let Proximity = require('./Proximity.js');
let DetectedObject = require('./DetectedObject.js');
let PopulationState = require('./PopulationState.js');
let ConveyorBeltState = require('./ConveyorBeltState.js');
let Kit = require('./Kit.js');
let LogicalCameraImage = require('./LogicalCameraImage.js');
let StorageUnit = require('./StorageUnit.js');
let VacuumGripperState = require('./VacuumGripperState.js');
let Model = require('./Model.js');
let TrayContents = require('./TrayContents.js');

module.exports = {
  Order: Order,
  KitObject: KitObject,
  KitTray: KitTray,
  Proximity: Proximity,
  DetectedObject: DetectedObject,
  PopulationState: PopulationState,
  ConveyorBeltState: ConveyorBeltState,
  Kit: Kit,
  LogicalCameraImage: LogicalCameraImage,
  StorageUnit: StorageUnit,
  VacuumGripperState: VacuumGripperState,
  Model: Model,
  TrayContents: TrayContents,
};

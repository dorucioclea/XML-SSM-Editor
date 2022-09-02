// minimal
//var xmlTemplate = "<ssm><Api base-url='http://192.168.1.214:8080'/><SystemElement label='one'/><SystemElement label='two'/></ssm>";
// all
var xmlTemplate = "<ssm xmlns='ase5_SSM'><Api base-url='http://192.168.1.214:8080'></Api><SystemElement space_sys_obj_name='sut-robot' sys_elmt_absolute_name='sut-robot'><Activity  space_sys_obj_name='moveForward' act_descr='moveForward'><act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></Activity><Activity space_sys_obj_name='moveBackwards' act_descr='moveBackwards'><act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></Activity><Activity space_sys_obj_name='rotateClockwise' act_descr='rotateClockwise'><act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></Activity><Activity space_sys_obj_name='rotateCounterclockwise' act_descr='rotateCounterclockwise'><act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></Activity><Activity space_sys_obj_name='reset' act_descr='reset'/><Activity space_sys_obj_name='stop' act_descr='stop'/><ReportingData space_sys_obj_name='distanceFront' rd_descr='distanceFront' rd_dataType='Real'/><ReportingData space_sys_obj_name='distanceDriven' rd_descr='distanceDriven' rd_dataType='Real'/><ReportingData space_sys_obj_name='movementStatus' rd_descr='movementStatus' rd_dataType='Boolean'/><ReportingData space_sys_obj_name='gyroscopeX' rd_descr='gyroscopeX' rd_dataType='Real'/><ReportingData space_sys_obj_name='gyroscopeY' rd_descr='gyroscopeY' rd_dataType='Real'/><ReportingData space_sys_obj_name='gyroscopeZ' rd_descr='gyroscopeZ' rd_dataType='Real'/><Event space_sys_obj_name='noAnswer' event_descr='The connection to the SUT has been lost.'/><Event space_sys_obj_name='obstacleFound' event_descr='An obstacle has been detected on the defined path.'/><Event space_sys_obj_name='noPathLimit' event_descr='The location of the robot cant be defined. No objects in sight.'/></SystemElement></ssm>"
// empty
//var xmlTemplate ="<ssm xmlns='ase5_SSM'><Api base-url='http://192.168.1.214:8080'/><SystemElement space_sys_obj_name='' sys_elmt_absolute_name=''><Activity></Activity><Event/><ReportingData/></SystemElement></ssm>"
// with namespace
//var xmlTemplate = "<ns1:ssm xmlns='ase5_SSM' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='ase5_SSM ssm_schema.xsd' xmlns:ns1='ase5_SSM'><Api base-url='http://192.168.1.214:8080'/><ns1:SystemElement space_sys_obj_name='sut-robot' sys_elmt_absolute_name='sut-robot'><ns1:Activity space_sys_obj_name='moveForward' act_descr='moveForward'><ns1:act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></ns1:Activity><ns1:Activity space_sys_obj_name='moveBackwards' act_descr='moveBackwards'><ns1:act_arg space_sys_obj_name='distance' act_arg_descr='distance' act_arg_dataType='Real'/></ns1:Activity><ns1:Activity space_sys_obj_name='rotateClockwise' act_descr='rotateClockwise'><ns1:act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></ns1:Activity><ns1:Activity space_sys_obj_name='rotateCounterclockwise' act_descr='rotateCounterclockwise'><ns1:act_arg space_sys_obj_name='degrees' act_arg_descr='degrees' act_arg_dataType='SignedInteger'/></ns1:Activity><ns1:Activity space_sys_obj_name='reset' act_descr='reset'/><ns1:Activity space_sys_obj_name='stop' act_descr='stop'/><ns1:ReportingData space_sys_obj_name='distanceFront' rd_descr='distanceFront' rd_dataType='Real'/><ns1:ReportingData space_sys_obj_name='distanceDriven' rd_descr='distanceDriven' rd_dataType='Real'/><ns1:ReportingData space_sys_obj_name='movementStatus' rd_descr='movementStatus' rd_dataType='Boolean'/><ns1:ReportingData space_sys_obj_name='gyroscopeX' rd_descr='gyroscopeX' rd_dataType='Real'/><ns1:ReportingData space_sys_obj_name='gyroscopeY' rd_descr='gyroscopeY' rd_dataType='Real'/><ns1:ReportingData space_sys_obj_name='gyroscopeZ' rd_descr='gyroscopeZ' rd_dataType='Real'/><ns1:Event space_sys_obj_name='noAnswer' event_descr='The connection to the SUT has been lost.'/><ns1:Event space_sys_obj_name='obstacleFound' event_descr='An obstacle has been detected on the defined path.'/><ns1:Event space_sys_obj_name='noPathLimit' event_descr='The location of the robot cant be defined. No objects in sight.'/></ns1:SystemElement></ns1:ssm>"

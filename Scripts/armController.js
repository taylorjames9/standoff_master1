

var clip: AnimationClip;
var youtouchaIDraw : boolean = false; 
//var drawSound: AudioClip; 
//var bullet: Transform;
var npcARM1_left	: npc1_script;
var npcARM2_right	: npc2_script;
var npcARM3_left	: npc3_script;
var npcARM4_right	: npc4_script;
//var canShoot : shoot;
var shootScript: shoot;
var playerScripto: player;


function Update () {

	if(youtouchaIDraw && shootScript.myBullets > 0)
		{
		animation.Play("QuickDraw");
		
		//transform.LookAt(playerScripto.lastTarget);
		
		var targetRotation = Quaternion.LookRotation(playerScripto.lastTarget - transform.position);
		transform.rotation = targetRotation;
		
		youtouchaIDraw = false;
		//var shootScript : shoot;
		//shootScript = GetComponent("shoot");
		//shootScript.youCanShoot++; 
		
		audio.Play();
		npcARM1_left.touchDrawNpc1 = true;
		npcARM2_right.touchDrawNpc2 = true;
		npcARM3_left.touchDrawNpc3 = true;
		npcARM4_right.touchDrawNpc4 = true;
		
		//hingeJoint.motor.force = 10.0;
    	//hingeJoint.motor.targetVelocity = 10;
    	///hingeJoint.motor.freeSpin = false;

	}
		
		//print("hingeJoint Angle: " + hingeJoint.angle);
		
		
		/*var targetRotation = Quaternion.LookRotation(playerScripto.lastTarget - transform.position);
		transform.rotation = targetRotation;
		//playerScripto.lastTarget;*/
		
}





function OnGUI()
	{

	}
	
function DrawGun(){

	}
	
function shoot(){

}
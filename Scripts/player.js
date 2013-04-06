
// Click To Move script
// Moves the object towards the mouse position on left mouse click
 
var smooth			:int; // Determines how quickly object moves towards position
//var cameraScript	: cameraRotate; 
var targetPosition	:Vector3; 
var startHit 		:boolean = false; 
//var mainArm : GetComponent(armController);
var myARM	: armController;
var floorHit: boolean = false;
//var shootScript : shoot;
var NPCActivate1	: NPCReactScript;
var NPCActivate2	: NPCReactScript;
//var NPC2Activate	: armController;
var shootScript	:    shoot;
var speed: float = 2;
var maxDistance: float = 2;
var deadMe: boolean = false;
//var dieMe: AnimationClip;
var deadStyle	: GUIStyle;
var animationCarrier: GameObject;
//var NPCActivate2	: NPCReactScript;
//var NPCActivate2	: NPCReactScript;
var vaseyy			: Transform;
var myVaseCarryingArm: Transform;
var iHavetheVase: boolean = false;
var audioVaseDrop: AudioSource;
var vaseDestroyed: boolean = false;
var shotAtNPC1: boolean = false;
var shotAtNPC2: boolean = false;
var noReasonToArgue: boolean = false;
var remitOpen: int = 0;
var exitAvailable:boolean = false;
var leftRoom1: boolean = false;
var stay1: int = 0;
var Opaque: GUIStyle;
var exitBall: Transform;
//var mainGuy: Transform;
var hatch: Transform;
var npc1: Transform;
var npc2: Transform;
var lastTarget: Vector3;
var latestTargeto: String;
var maxMoveDistance: int = 2;
var guiPresent: boolean = false;
//var exitBall: Transform;


var vaseSavO: String = "saved";
var gtPts: int = 0; 

var playerGUI_1: boolean = false;
var playerGUI_2: boolean = false;
var playerGUI_3: boolean = false;
var playerGUI_4: boolean = false;

var npcGUI_1_1: boolean = false;
var npcGUI_1_2: boolean = false;
var npcGUI_2_1: boolean = false;
var npcGUI_2_2: boolean = false;
var npcGUI_3_1: boolean = false;
var npcGUI_3_2: boolean = false;
var npcGUI_4_1: boolean = false;
var npcGUI_4_2: boolean = false;

var distFromExit: float;

var outtaBulletsDelayComplete: boolean = false;
var timeDelayOuttaBullets: float =0;
var oneTimeDelay: int = 0;


var deadDelayComplete: boolean = false;
var deadDelay: float = 0;
var oneDeadDelay: int = 0;

var nextUsage;
var delay=3;   //two seconds delay.


function Start()
{
	
	exitBall.renderer.enabled = false;
	iHavetheVase = false;
	gtPts = 0;
	
	 nextUsage = Time.time + delay;
	 
} 
 
function Update () {

print("lastTarget0" + latestTargeto);


distFromExit = Vector3.Distance(exitBall.position, transform.position);

npcGUI_1_1 = NPCActivate1.npcGUI_1_1;
npcGUI_1_2 = NPCActivate2.npcGUI_1_2;
npcGUI_2_1 = NPCActivate1.npcGUI_2_1;
npcGUI_2_2 = NPCActivate2.npcGUI_2_2;
npcGUI_3_1 = NPCActivate1.npcGUI_3_1;
npcGUI_3_2 = NPCActivate2.npcGUI_3_2;
npcGUI_4_1 = NPCActivate1.npcGUI_4_1;
npcGUI_4_2 = NPCActivate2.npcGUI_4_2; 

//print("leftroom1: " + leftRoom1);
//print("stay: " + stay1);
//print("exitAvailable: " + exitAvailable);

	if(distFromExit>4 && stay1%2==1){
	
		stay1++;
	
	}
	
	if(!vaseDestroyed && NPCActivate1.canPickUpVase == true && NPCActivate1.pickUpComplete)
   	  	  {
   	  		vaseyy.transform.parent = myVaseCarryingArm.transform;
   	  		vaseyy.transform.position = myVaseCarryingArm.transform.position;
   	  		iHavetheVase = true;
   	  		//NPCActivate1.pickUpComplete = true;
     	}

	if(startHit && Input.GetKeyDown(KeyCode.Mouse0) && !deadMe)
	{
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
 	
		if (Physics.Raycast (ray, hit) && !NPCActivate1.npcGuiPresent && !NPCActivate2.npcGuiPresent && !guiPresent) {
			var targetPoint = hit.point;
			targetPoint.y = 1.23;
			//print("this is the hitpoint value" + hit.point);
			targetPosition = hit.point;
			targetPosition.y = 1.23; 
			
			var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.rotation = targetRotation;
			var scriptFinder: shoot = FindObjectOfType(shoot);

     	/*if(!vaseDestroyed && NPCActivate1.canPickUpVase == true && NPCActivate2.pickUpComplete)
   	  	  {
   	  		vaseyy.transform.parent = myVaseCarryingArm.transform;
   	  		vaseyy.transform.position = myVaseCarryingArm.transform.position;
   	  		iHavetheVase = true;
   	  		//NPCActivate1.pickUpComplete = true;
	
     		}*/
			
	      if(hit.collider.gameObject.tag == "vaza" && NPCActivate1.canPickUpVase == false && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent){
   	  		myARM.youtouchaIDraw = true;
		    shootScript.aimingAT_vase++;
		    shootScript.mainTargetName = "Vase";
		    shootScript.mainTargetDistance = Vector3.Distance(transform.position, vaseyy.position);
		    lastTarget = vaseyy.position;
		    latestTargeto = vaseyy.tag;
		    NPCActivate2.amThreatened_2 = false;
   	  		floorHit = false;
   	  		
   	  		NPCActivate1.vasePointingAt = true;
   	  		NPCActivate2.vasePointingAt = true;
   	  		

   	  		}
   	  		
   	  	  if(hit.collider.gameObject.tag == "hatch" && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent ){
   	  		myARM.youtouchaIDraw = true;
		    shootScript.aimingAT_Hatch++;
		    shootScript.mainTargetName = "Metal Door";
		    shootScript.mainTargetDistance = Vector3.Distance(transform.position, hatch.position);
		    lastTarget = hatch.position;
		     latestTargeto = hatch.tag;
		    shootScript.aimingAT_2 = 0;
   	  		shootScript.aimingAT_1 =0;
   	  		shootScript.aimingAT_vase =0;
   	  		NPCActivate1.amThreatened_1 = false;
   	  		floorHit = false;
   	  		
   	  		}
   	  		
   	  	if(exitAvailable == true && hit.collider.gameObject.tag == "ExitDoor")
   	  	{
   	  		//print("we're in to the vault: leftRoom is triggered next");
   	  		leftRoom1 = true; 
   	  		stay1++;
   	  	
   	  	}

     		
     		if(hit.collider.gameObject.tag == "NPC_1" && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent)
     		{
     			
     			myARM.youtouchaIDraw = true;
		    	shootScript.aimingAT_1++;
		    	shootScript.mainTargetName = "Cousin";
   	  			floorHit = false;
   	  			NPCActivate1.amThreatened_1 = true;
   	  			NPCActivate2.amThreatened_2 = false;
   	  			shootScript.mainTargetDistance = Vector3.Distance(transform.position, npc1.position);
   	  			lastTarget = npc1.position;
   	  			 latestTargeto = npc1.tag;
   	  			shootScript.aimingAT_2 = 0;
   	  			shootScript.aimingAT_Hatch =0;
   	  			shootScript.aimingAT_vase =0;
   	  			
     		}
     		
     		if(hit.collider.gameObject.tag == "NPC_2" && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent)
     		{
     			myARM.youtouchaIDraw = true;
		    	shootScript.aimingAT_2++;
		    	shootScript.mainTargetName = "Brother";
   	  			floorHit = false;
   	  			NPCActivate2.amThreatened_2 = true;
   	  			shootScript.mainTargetDistance = Vector3.Distance(transform.position, npc2.position);
   	  			lastTarget = npc2.position;
   	  			 latestTargeto = npc2.tag;
   	  			NPCActivate1.amThreatened_1 = false;
   	  			shootScript.aimingAT_1 = 0;
   	  			shootScript.aimingAT_Hatch =0;
   	  			shootScript.aimingAT_vase =0;
   	  			
     		}
     		
     	 if(hit.collider.gameObject.tag == "floor" && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent){
     	  //print(hit.collider.gameObject.name);
     	  floorHit = true; 
     	  shootScript.mainTargetName = "Floor";
     	   shootScript.aimingAT_1 = 0;
     	   shootScript.aimingAT_2 = 0;
   	  	   shootScript.aimingAT_Hatch =0;
   	  	   shootScript.aimingAT_vase =0;
		   scriptFinder.youCanShoot = 0;
     	 		}
		}

 	//Old Move Script
 	 if(floorHit && !NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent)
 	 {
	 	
	    var dir = targetPosition - transform.position;
		dir = Vector3.ClampMagnitude(dir, maxMoveDistance);
		targetPosition = transform.position + dir;
	  	transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * smooth);
     	}
	}
	 	
	if(vaseDestroyed && remitOpen==0)
	{
		noReasonToArgue = true;
		remitOpen++;
	 	 	
	}
	
	 if(shootScript.myBullets ==0 && oneTimeDelay ==0)
	 {
	 	timeDelayOuttaBullets = Time.time + 10;
	 	oneTimeDelay++;
	 } 	
	 
	 if (Time.time > timeDelayOuttaBullets && oneTimeDelay ==1)
	 {
     	outtaBulletsDelayComplete = true;
	 }
	 
	 if(deadMe && oneDeadDelay ==0)
	 {
	 	deadDelay = Time.time + 5;
	 	oneDeadDelay++;
	 } 	
	 
	 if (Time.time > deadDelay && oneDeadDelay ==1)
	 {
     	deadDelayComplete = true;
	 }
	 
}

function OnTriggerEnter (other:Collider)

{
	if(other.gameObject.tag =="bullet")
	{
		//yield WaitForSeconds (0.15);
		deadMe = true;
		print("deadMe: " + deadMe);
		if(iHavetheVase)
		{
			audioVaseDrop.Play();
			vaseyy.gameObject.renderer.enabled = false;
			yield WaitForSeconds (1);
			print("object was destroyed after Drop");
			Destroy (vaseyy.gameObject);
			NPCActivate1.vaseAlive = false;
			NPCActivate2.vaseAlive = false; 
			vaseyy.transform.parent = null;
			vaseDestroyed = true;
			iHavetheVase = false;
			vaseSavO = "destroyed";
			
		}
		if(!NPCActivate1.npcGuiPresent && !guiPresent && !NPCActivate2.npcGuiPresent){
		yield WaitForSeconds (2);
		}
	}
}

function OnGUI ()
{
		//
		if(!deadMe && !exitAvailable && shootScript.myBullets == 0 && !playerGUI_2 && !playerGUI_3 && !playerGUI_4 && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2 && outtaBulletsDelayComplete)
		{
		
			guiPresent = true;
			playerGUI_1 = true;
			GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 190));
	    	
	    	//ignoringRaycast = rMenu1.Contains(mousePos);

			GUI.Box (Rect (0,0, 300, 190), "");
			
			GUI.Label (Rect (10,20,220,100), "Out of Bullets", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,45,280,100), "There is nothing more you can do at this time.", NPCActivate2.nPCDiag);
	
				if (GUI.Button (Rect (80,115,120,30), "Try Again."))
					{
						Application.LoadLevel ("IntroTextScene");
						playerGUI_1 = false;
					}
				if (GUI.Button (Rect (80,150,120,30), "Main Menu"))
					{
						Application.LoadLevel ("MainMenuScene");
						playerGUI_1 = false;
					}

			// End the group we started above. This is very important to remember!
			GUI.EndGroup ();
			}	  
			//playerGUI_1 = false;
		
	
		if(deadMe && deadDelayComplete && !playerGUI_1 && !playerGUI_3 && !playerGUI_4 && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2)
		{
			//GUI.Label(Rect(25,Screen.height/2,Screen.width,Screen.height),"MainPlayer is Dead", deadStyle);
			
			//Invoke("yieldo", 3);
			guiPresent = true;
			playerGUI_2 = true;
	    	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 190));
	    	
	    	//ignoringRaycast = rMenu1.Contains(mousePos);

			GUI.Box (Rect (0,0, 300, 190), "");
			
			GUI.Label (Rect (10,20,220,100), "Main Player is Dead", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,45,280,100), "Hint: They both care about the vase...Maybe you can use that to your advantage.", NPCActivate2.nPCDiag);
	
				if (GUI.Button (Rect (80,115,120,30), "Try Again."))
					{
						Application.LoadLevel ("IntroTextScene");
						playerGUI_2 = false;
					}
				if (GUI.Button (Rect (80,150,120,30), "Main Menu"))
					{
						Application.LoadLevel ("MainMenuScene");
						playerGUI_2 = false;
					}

			// End the group we started above. This is very important to remember!
			GUI.EndGroup ();
			}	  
		
	    if(vaseDestroyed && deadMe)
	    	{
	    		GUI.Label(Rect(25,Screen.height/2,Screen.width,Screen.height),"MainPlayer is Dead", deadStyle);
	    		GUI.Label(Rect(25,Screen.height/2.25,Screen.width,Screen.height),"Vase Destroyed", deadStyle);
	    	}
	    	
	  if(noReasonToArgue && remitOpen==1 && !NPCActivate2.dead2 && !playerGUI_1 && !playerGUI_2 && !playerGUI_4 && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2){
	  		guiPresent = true;
	  		playerGUI_3 = true;
	    	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 350, 150));
			GUI.Box (Rect (0,0, 320,150), "");
			GUI.Label (Rect (10,20,350,100), "Your Brother Says: ", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,50,300,100), "Wait...Without the vase...there's no reason for us to shoot eachother.");
				if (GUI.Button (Rect (30,100,150,30), "Exactly"))
					{
						remitOpen++;
						//enterMySpaceCounter2++;
						guiPresent = false;
						playerGUI_3 = false;
					}
			// End the group we started above. This is very important to remember!
			GUI.EndGroup ();
		}
	if(distFromExit<4 && leftRoom1 && stay1%2==0 && !playerGUI_1 && !playerGUI_2 && !playerGUI_3 && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2)
	{
			print("we're into the GUI vault"); 
	    	guiPresent = true;
	    	playerGUI_4 = true;
	    	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 215));
			GUI.Box (Rect (0,0, 300, 215), "");
			GUI.Label (Rect (10,20,220,100), "You " + vaseSavO + " the vase.", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,45,220,100), "You lost " + gtPts + " genetic pts.", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,70,220,100), "You have " + shootScript.myBullets + " bullets remaining.", NPCActivate2.nPCDiag);
			GUI.Label (Rect (10,95,220,100), "Would you like to leave the room?", NPCActivate2.nPCDiag);
			//GUI.Label (Rect (10,50,300,100), "Wait...Without the vase...there's no reason for us to shoot eachother.");
	
				if (GUI.Button (Rect (80,135,120,30), "Leave Room"))
					{
						Application.LoadLevel ("MainMenuScene");
					}
				if (GUI.Button (Rect (80,170,120,30), "Stay in Room"))
					{
						stay1++;
						guiPresent = false;
						playerGUI_4 = false;
					}

			// End the group we started above. This is very important to remember!
			GUI.EndGroup ();
			}
}	    	
			
function delayTimeO()
{

	print("yieldo was called");
	yield WaitForSeconds (3);
	outtaBulletsDelayComplete = true;
}
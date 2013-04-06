


var audioUff 			: AudioSource;
var mainMan				: Transform;	
var intruder 			: Transform;
var otherDude			: Transform;
var vasey				: Transform;
var amThreatened_1		: boolean = false;
var amThreatened_2		: boolean = false;
var retaliate1			: boolean = false; 
var retaliate2			: boolean = false; 
var prefabBulletWhite 	: Transform;
var shotSpeed			: float = 3;
var fire1 				: AudioSource;
//var fire2 			: AudioSource;
var dieClip1			: AnimationClip;
var dieClip2			: AnimationClip;
var dead1				: boolean = false; 
var dead2				: boolean = false;
var shotsFired			: shoot;
var nPCDiag				: GUIStyle;
var dialogueOpen1		: boolean = false;
var dialogueOpen2 		: boolean = false;
var enterMySpaceCounter1	:int =0;
var enterMySpaceCounter2	:int =0;
var warningFromNPC_1	: int =0;
var warningFromNPC_2	: int =0;
var bulletShot1: int =0;
var bulletShot2: int= 0;
var vaseAlive: boolean = true; 
var vaseThreat: boolean = false;
var vaseCounter: int = 0; 
var vasePointingAt: boolean = false; 
var vaseThreatShot: int = 0;
var canPickUpVase: boolean = false;
var playerScripto: player;
var npcGuiPresent: boolean = false;

var NPCActivate1	: NPCReactScript;
var NPCActivate2	: NPCReactScript;

var shotfiredATNPC_1: boolean = false;
var shotfiredATNPC_2: boolean = false;

var bulletNumber1: int = 2;
var bulletNumber2: int = 2;

var guiForVasePickup: boolean = false;
var pickUpComplete = false;

var NPC_1_TargetName: String;
var NPC_2_TargetName: String;

var vaseHostage: boolean = false;

var vaseSpaceCounter: int = 0;

var sneak1: int =0;
var sneak2: int =0;

//var nPCGUIAware: boolean = false;

var npcGUI_1_1: boolean = false;
var npcGUI_1_2: boolean = false;
var npcGUI_2_1: boolean = false;
var npcGUI_2_2: boolean = false;
var npcGUI_3_1: boolean = false;
var npcGUI_3_2: boolean = false;
var npcGUI_4_1: boolean = false;
var npcGUI_4_2: boolean = false;

var playerGUI_1: boolean;
var playerGUI_2: boolean;
var playerGUI_3: boolean;
var playerGUI_4: boolean;


//&& !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4



function Start()
{
	NPC_1_TargetName = "Your Brother";
	NPC_2_TargetName = "Your Cousin";
}

function Update()
	{
	
playerGUI_1 = playerScripto.playerGUI_1 ;
playerGUI_2 = playerScripto.playerGUI_2 ;
playerGUI_3 = playerScripto.playerGUI_3 ;
playerGUI_4 = playerScripto.playerGUI_4 ;	
	
	
	//print("dead2: " + dead2);
	
	var dist = Vector3.Distance(intruder.position, transform.position);
	
	if(vaseAlive == true)
	{
	var vaseDist = Vector3.Distance(intruder.position, vasey.transform.position);
	}
	
	if (gameObject.tag == "NPC_1" && dead2 && !dead1) 
		{
   		var targetRotation_30 = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation_30;
    	//print ("Distance to red intruduer: " + dist);
		}
		
	if (gameObject.tag == "NPC_2" && dead1 && !dead2) 
		{
   		var targetRotation_50 = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation_50;
    	//print ("Distance to red intruduer: " + dist);
		}
	
	if (dist<10 && !dead1 && !dead2) 
		{
   		var targetRotation = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation;
    	//print ("Distance to red intruduer: " + dist);
		}
	if (dist>10 && !dead1 && !dead2) 
		{
   		var targetRotation_2 = Quaternion.LookRotation(otherDude.transform.position - transform.position);
		transform.rotation = targetRotation_2;
    	//print ("Distance to white gunman: " + dist);
		}
	
	if (vaseDist<8 && !dead1 && !dead2) 
	{
	   	var targetRotation_5 = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation_5;
		NPC_1_TargetName = "MainPlayer";
		NPC_2_TargetName = "MainPlayer";
	 
	  } 
	if (vaseDist>8 && !dead1 && !dead2) 
	{
		var targetRotation_6 = Quaternion.LookRotation(otherDude.transform.position - transform.position);
		transform.rotation = targetRotation_6;
		NPC_1_TargetName = "Your Brother";
		NPC_2_TargetName = "Your Cousin";
	 }
	 
	 //warning issued
	if (vaseDist<8 && vaseDist>0 && !dead1 && !dead2 ) 
	{
		//print(vaseDist);
		vaseThreat = true; 
	 
	  } 
	  
	if (vaseDist<4.5 && vaseDist>0 && !dead1 && !dead2 && !vasePointingAt && vaseThreatShot == 0) 
	{
		//print(vaseDist);
		var instanceBullet5 = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet5.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-0.5, 0.5), 0, Random.Range(-0.5, 0.5))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet5.collider, collider);
		audio.Play();
		bulletNumber1--;
		bulletNumber2--;
		
		vaseThreatShot++;
	 
	  } 
	  
	if (vaseDist<7 && vaseDist>0 && !dead1 && !dead2 && vasePointingAt) 
	{
	
		vaseHostage = true;

	  } 
	  
	  	if (vaseDist<3 && vaseDist>0) 
	{
		//print(vaseDist);
		
		//canPickUpVase = true;
		
		guiForVasePickup = true; 	 
	  } 

	if(amThreatened_1 && !dead1)
	{
		var targetRotation_3 = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation_3;
		transform.position.x = 3.837204;
		transform.position.z = 8.0500208;
    	//print ("Distance to red intruduer: " + dist);
    	NPC_1_TargetName = "MainPlayer";
    	amThreatened_2=false;
		
	}
	if(amThreatened_2 && !dead2)
	{
		var targetRotation_4 = Quaternion.LookRotation(intruder.transform.position - transform.position);
		transform.rotation = targetRotation_4;
    	//print ("Distance to red intruduer: " + dist);
    	NPC_2_TargetName = "MainPlayer";
    	amThreatened_1=false;
	}

	
	
	if(warningFromNPC_1 == 1 && dist<5 && bulletShot1 == 0 && bulletNumber1>0)
	{
		
		var instanceBullet = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet.collider, collider);
		audio.Play();
		bulletNumber1--;
	
	}
	
	if(warningFromNPC_2 == 1 && dist<5 && bulletShot2 == 0 && bulletNumber2>0)
	{
	
		var instanceBullet2 = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet2.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet2.collider, collider);
		audio.Play();
		bulletNumber2--;

	}
	
	if(shotfiredATNPC_1 == true && !dead1 && bulletNumber1>0)
	{
		var instanceBullet_9 = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet_9.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet_9.collider, collider);
		audio.Play();
		bulletNumber1--;
		shotfiredATNPC_1 = false;
		
	}
	
		if(shotfiredATNPC_2 == true && !dead2 && bulletNumber2>0)
	{
		var instanceBullet_10 = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet_10.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet_10.collider, collider);
		bulletNumber2--;
		audio.Play();
		shotfiredATNPC_2 = false;
	}

	if(gameObject.tag == "NPC_2" && dead1 && sneak2==0 && !playerScripto.vaseDestroyed && !playerScripto.iHavetheVase)
	{
		print("brother should be moving");
	  	transform.position = Vector3.Lerp (transform.position, Vector3(5.5,1.75,-1.5), Time.deltaTime);
		//sneak2++;
	}
		if(gameObject.tag == "NPC_1" && dead2 && sneak1==0 && !playerScripto.vaseDestroyed && !playerScripto.iHavetheVase)
	{
		print("cousin should be moving");
	  	transform.position = Vector3.Lerp (transform.position, Vector3(4.3,2,7.1), Time.deltaTime);
		//sneak1++;
	}
}

function OnTriggerEnter (other:Collider)

{
	if(other.gameObject.tag =="bullet" && gameObject.tag =="NPC_1"  && !dead1)
	{
		if(bulletNumber1>0)
		{
		//print("hit character should make sound effect");
		var instanceBullet = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet.collider, collider);
		audio.Play();
		bulletNumber1--;
		}
		audioUff.Play();
		animation.Play("DieAnimation");
		dead1 = true;
		//otherDude.
		NPCActivate2.dead1 = true;
		playerScripto.gtPts+=4;
	}
		if(other.gameObject.tag =="bullet" && gameObject.tag =="NPC_2" && !dead2)
	{
		if(bulletNumber2>0){
		var instanceBullet2 = Instantiate(prefabBulletWhite, transform.position, Quaternion.identity);
		instanceBullet2.rigidbody.AddForce(((mainMan.transform.position + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shotSpeed);
		Physics.IgnoreCollision(instanceBullet2.collider, collider);
		audio.Play();
		bulletNumber2--;
		}
		audioUff.Play();
		animation.Play("DieAnimationBrother");
		dead2 = true;
		NPCActivate1.dead2 = true;
		playerScripto.gtPts+=8;
		
	}
}


function OnGUI(){

	var dist2 = Vector3.Distance(intruder.position, transform.position);
	
	if(dist2<6 && gameObject.tag =="NPC_1"  && !dead1)
	{
		dialogueOpen1 = true;
	}

	if(vaseThreat && vaseCounter == 0 && !playerScripto.vaseDestroyed && gameObject.tag == "NPC_1" && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4)
	{
		npcGuiPresent = true;
		npcGUI_1_1 = true; 
		npcGUI_1_2 = true; 
		GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 350, 150));
		GUI.Box (Rect (0,0, 300,150), "");
		GUI.Label (Rect (10,20,350,100), "Your Cousin Says: ",nPCDiag);
		GUI.Label (Rect (10,50,300,100), "One more step towards that vase and you're dead.");
	
	if (GUI.Button (Rect (30,100,150,30), "Got it."))
	{
		vaseThreat = false;
		vaseCounter++;
		npcGuiPresent = false;
		npcGUI_1_1 = false; 
		npcGUI_1_2 = false; 
	}

	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	}
	
	
	if(dialogueOpen1 && enterMySpaceCounter1%3==0 && !playerScripto.vaseDestroyed && !playerScripto.iHavetheVase && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4){
	
	npcGuiPresent = true;
	npcGUI_2_1 = true; 
	npcGUI_2_2 = true; 
	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 350, 150));
	GUI.Box (Rect (0,0, 300,150), "");
	GUI.Label (Rect (10,20,350,100), "Your Cousin Says: ",nPCDiag);
	GUI.Label (Rect (10,50,300,100), "If you take another step towards me, I will shoot you. You can be sure of that.");
	
	if (GUI.Button (Rect (30,100,150,30), "Got it."))
	{
		dialogueOpen1 = false;
		enterMySpaceCounter1++;
		warningFromNPC_1++;
		npcGuiPresent = false;
		npcGUI_2_1 = false; 
		npcGUI_2_2 = false;
	}

	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	}
	
	if(dist2<6 && gameObject.tag =="NPC_2"  && !dead2)
	{
		dialogueOpen2 = true;
	}
	
	
	
	if(dialogueOpen2 && enterMySpaceCounter2%3==0 && !playerScripto.vaseDestroyed && !playerScripto.iHavetheVase && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_4_1 && !npcGUI_4_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4){
	npcGuiPresent = true;
	npcGUI_3_1 = true; 
	npcGUI_3_2 = true;
	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 350, 150));
	// All rectangles are now adjusted to the group. (0,0) is the topleft corner of the group.
	//ignoringRaycast = rMenu1.Contains(mousePos);
	// We'll make a box so you can see where the group is on-screen.
	GUI.Box (Rect (0,0, 300,150), "");
	GUI.Label (Rect (10,20,350,100), "Your Brother Says: ", nPCDiag);
	GUI.Label (Rect (10,50,300,100), "Whoa. If you take another step towards me, I will have to shoot you.");
	
	if (GUI.Button (Rect (30,100,150,30), "Got it."))
	{
		dialogueOpen2 = false;
		enterMySpaceCounter2++;
		warningFromNPC_2++;
		npcGuiPresent = false;
		npcGUI_3_1 = false; 
		npcGUI_3_2 = false;
	}

	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	}
	
    if(gameObject.tag == "NPC_1" && vaseHostage && vaseSpaceCounter==0 && !playerScripto.vaseDestroyed && !playerScripto.iHavetheVase && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4){
	npcGuiPresent = true;
	npcGUI_4_1 = true; 
	npcGUI_4_2 = true;
	GUI.BeginGroup (Rect (Screen.width / 2 - 150, Screen.height / 2 - 50, 350, 150));
	// All rectangles are now adjusted to the group. (0,0) is the topleft corner of the group.
	//ignoringRaycast = rMenu1.Contains(mousePos);
	// We'll make a box so you can see where the group is on-screen.
	GUI.Box (Rect (0,0, 300,150), "");
	GUI.Label (Rect (10,20,350,100), "Your Cousin Says: ", nPCDiag);
	GUI.Label (Rect (10,50,300,100), "He's aiming at the vase. If I shoot at him, he might shoot the vase. I don't like this...");
	
	if (GUI.Button (Rect (30,100,150,30), "Interesting..."))
	{
		vaseHostage = false;
		//enterMySpaceCounter2++;
		vaseSpaceCounter++;
		//warningFromNPC_2++;
		npcGuiPresent = false;
		npcGUI_4_1 = false; 
		npcGUI_4_2 = false;
	}

	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	}
	if(gameObject.tag == "NPC_1"){
		//print("bulletnumber1 " + bulletNumber1);
		GUI.color = Color.white;
		GUI.Label(Rect(25,Screen.height/2.2,Screen.width,Screen.height),"Cousin Has " + bulletNumber1 + " Bullet(s)");
		}
	if(gameObject.tag == "NPC_1"){
		//print("bulletnumber1 " + bulletNumber1);
		GUI.color = Color.white;
		GUI.Label(Rect(25,Screen.height/2.1,Screen.width,Screen.height),"Aiming at: " + NPC_1_TargetName + " (40%)");
		}
	if(gameObject.tag == "NPC_2"){
		//print("bulletnumber2 " + bulletNumber2);
		GUI.color = Color.blue;
		GUI.Label(Rect(25,Screen.height/1.9,Screen.width,Screen.height),"Brother Has " + bulletNumber2 + " Bullet(s)");
		}
	if(gameObject.tag == "NPC_2"){
		//print("bulletnumber2 " + bulletNumber2);
		GUI.color = Color.blue;
		GUI.Label(Rect(25,Screen.height/1.82,Screen.width,Screen.height),"Aiming at: " + NPC_2_TargetName + " (40%)");
		}
		
	if(gameObject.tag == "NPC_1" && guiForVasePickup && !pickUpComplete && !npcGUI_1_1 && !npcGUI_1_2 && !npcGUI_2_1 && !npcGUI_2_2 && !npcGUI_3_1 && !npcGUI_3_2 && !npcGUI_4_1 && !npcGUI_4_2 && !playerGUI_1  && !playerGUI_2  && !playerGUI_3  && !playerGUI_4)
	{
		npcGuiPresent = true;
		if (GUI.Button(Rect(Screen.width/2,Screen.height/2,90,40),"Pickup Vase"))
     	   	{
        		canPickUpVase = true;
        		pickUpComplete = true;
        		npcGuiPresent = false;
        		guiForVasePickup = false;
     		}
	}
}





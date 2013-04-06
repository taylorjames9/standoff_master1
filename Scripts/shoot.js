

var prefabBullet: Transform;
var shootForce: float;
var youCanShoot : int = 0;
var audioGunShot: AudioSource;
var fired10Shot = false; 
var fired20Shot = false; 
var aimingAT_1 : int = 0;
var aimingAT_2 : int = 0;
var aimingAT_vase:int = 0;
var aimingAT_Hatch:int =0;
var NPCReact1: NPCReactScript;
var NPCReact2: NPCReactScript;
var myBullets: int = 3;
var deadStyle: GUIStyle;
var bulletGUI: int = 0;
var fadeMultiplier: float = 1;
var dryFire: AudioSource;
var playerScripto: player;


var mainTargetName: String;
var mainTargetDistance: float = 10;
//var mainTarget: Transform;
var chanceHit: float = 10.0;


function Start()
{
	 mainTargetName = "Nothing";
	 //chanceHit = 10;
}


function Update () 
{

//print("mainTarget Distance: " + mainTargetDistance);
chanceHit = Mathf.FloorToInt(60/mainTargetDistance);
//print("chanceHit = " + chanceHit);
	if(chanceHit> 9)
	{
		chanceHit = 80;
	}
	if(chanceHit< 2)
	{
		chanceHit = 0;
	}


var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var hit : RaycastHit;
if (Physics.Raycast (ray, hit, 100)) {
    //Debug.DrawLine (ray.origin, hit.point);
	if(Input.GetButtonDown("Fire1") && (aimingAT_1>1) && myBullets>0 && !NPCReact1.npcGuiPresent && !NPCReact2.npcGuiPresent && !playerScripto.guiPresent)
	{
		var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet.rigidbody.AddForce(((hit.point + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shootForce);
		Physics.IgnoreCollision(instanceBullet.collider, collider);
		audioGunShot.Play();
	
		//print("cracked in with enough aimingAT_1 pts: " + aimingAT_1);
		aimingAT_1=0;
		fired10Shot = true; 
		myBullets--;
		//shotFired();
		NPCReact1.shotfiredATNPC_1 = true;
		}
		}
		
	if (Physics.Raycast (ray, hit, 100)) {
    //Debug.DrawLine (ray.origin, hit.point);
	if(Input.GetButtonDown("Fire1") && (aimingAT_1>1) && myBullets==0)
	{
		dryFire.Play();
	
		}
		}

if (Physics.Raycast (ray, hit, 100)) {
	if(Input.GetButtonDown("Fire1") && (aimingAT_2>1)&& myBullets>0 && !NPCReact1.npcGuiPresent && !playerScripto.guiPresent && !NPCReact2.npcGuiPresent )
	{
		var instanceBullet_02 = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet_02.rigidbody.AddForce(((hit.point + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shootForce);
		Physics.IgnoreCollision(instanceBullet_02.collider, collider);
		audioGunShot.Play();
	
		//print("cracked in with enough aimingAT_2 pts: " + aimingAT_2);
		aimingAT_2=0;
		fired20Shot = true;
		//print("and now fired2Shot is : " + fired20Shot);
		//print("and now fired10Shot is : " + fired10Shot);
		myBullets--;
		//shotFired();
		NPCReact2.shotfiredATNPC_2 = true; 

		}		
	}
	if (Physics.Raycast (ray, hit, 100)) {
	if(Input.GetButtonDown("Fire1") && (aimingAT_2>1)&& myBullets==0)
	{
		dryFire.Play();

		}		
	}
	
	if (Physics.Raycast (ray, hit, 100)) {
	if(Input.GetButtonDown("Fire1") && (aimingAT_Hatch>1)&& myBullets>0 && !NPCReact1.npcGuiPresent && !playerScripto.guiPresent && !NPCReact2.npcGuiPresent )
	{
		var instanceBullet_21 = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet_21.rigidbody.AddForce(((hit.point + Vector3(Random.Range(-0.2, 0.3), 0, Random.Range(-0.5, 0.5))) - transform.position) * shootForce);
		Physics.IgnoreCollision(instanceBullet_21.collider, collider);
		audioGunShot.Play();
	
		//print("cracked in with enough aimingAT_2 pts: " + aimingAT_2);
		aimingAT_Hatch=0;
		fired20Shot = true;
		//print("and now fired2Shot is : " + fired20Shot);
		//print("and now fired10Shot is : " + fired10Shot);
		myBullets--;
		//shotFired();
		//NPCReact2.shotfiredATNPC_2 = true; 

		}		
	}
	if (Physics.Raycast (ray, hit, 100)) {
	if(Input.GetButtonDown("Fire1") && (aimingAT_Hatch>1)&& myBullets==0)
	{
		dryFire.Play();

		}		
	}
	
	if (Physics.Raycast (ray, hit, 100)) {
    //Debug.DrawLine (ray.origin, hit.point);
	if(Input.GetButtonDown("Fire1") && (aimingAT_vase>1) && NPCReact1.canPickUpVase == false && myBullets>0 && !NPCReact1.npcGuiPresent && !playerScripto.guiPresent && !NPCReact2.npcGuiPresent )
	{
		var instanceBullet_03 = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet_03.rigidbody.AddForce(((hit.point + Vector3(Random.Range(-2.0, 2.0), 0, Random.Range(-2.0, 2.0))) - transform.position) * shootForce);
		
		Physics.IgnoreCollision(instanceBullet_03.collider, collider);
		audioGunShot.Play();
	
		//print("cracked in with enough aimingAT_1 pts: " + aimingAT_vase);
		aimingAT_vase=0;
		fired10Shot = true; 
		myBullets--;
		}
		}
	
	if (Physics.Raycast (ray, hit, 100)) {
	if(Input.GetButtonDown("Fire1") && (aimingAT_vase>1) && NPCReact1.canPickUpVase == false && myBullets==0 )
	{

		dryFire.Play();

		}
	}
		
}

function OnGUI () {
	
	
		GUI.Label(Rect(25,Screen.height/2.7,Screen.width,Screen.height),"I have " + myBullets + " Bullet(s)", deadStyle);
		//GUI.color.a -= Time.deltaTime * fadeMultiplier;
		GUI.Label(Rect(25,Screen.height/2.53,Screen.width,Screen.height),"Aiming At: " + mainTargetName + " (" + chanceHit*10 + "%)", deadStyle);

}




//var bulletSpeed: float = 15.0;
//var armDirection   :  GameObject;
var explosion: Transform;
var explosionVase: Transform;
//var sceneManager: Transform;
var playScript	:  player;
//var spotToHit	: Vector3;
var armScript	:  armController;
//var audioVaseShot : AudioSource;
var npc1_shootActivate	: NPCReactScript;
var npc2_shootActivate	: NPCReactScript;



function Update () 
{

}

function OnTriggerEnter (other:Collider)

{
	if(other.gameObject.tag =="NPC_1")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		//npc1_scriptActivate.NPC_1_ReactionShot = true; 
		Destroy (gameObject);
		//sceneManager.transform.GetComponent("scriptSceneManager").AdScore();
	}
	
	if(other.gameObject.tag =="NPC_2")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		//npc2_scriptActivate.NPC_2_ReactionShot = true; 
		Destroy (gameObject);
		//sceneManager.transform.GetComponent("scriptSceneManager").AdScore();

	}
	if(other.gameObject.tag =="MainCharacter")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		//npc2_scriptActivate.NPC_2_ReactionShot = true; 
		Destroy (gameObject);
		//sceneManager.transform.GetComponent("scriptSceneManager").AdScore();

	}
	
	
		if(other.gameObject.tag =="hatch")
	{
	
		//playScript.exitAvailable = true;
		Instantiate(explosion, transform.position, transform.rotation);
		Destroy (gameObject);
		
		//sceneManager.transform.GetComponent("scriptSceneManager").AdScore();

	}
	
	if(other.gameObject.tag =="vaza" )
	{
		//print("you hit the vase");
		Instantiate(explosionVase, transform.position, transform.rotation);
		//audioVaseShot.Play();
		Destroy (gameObject);
		//Destroy (other.gameObject);
		//Play audio clip for breaking
		//audioShatterVase.Play();
		
	}
}


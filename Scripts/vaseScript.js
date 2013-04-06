


var audioVaseShot : AudioSource;
//var explosion: Transform;
var NPCScript_1: NPCReactScript;
var NPCScript_2: NPCReactScript;
var playerstuff: player;
 


function OnTriggerEnter (other:Collider)

{
	if(other.gameObject.tag =="bullet" )
	{
		audioVaseShot.Play();
		gameObject.renderer.enabled = false;
		//guiText.enabled = false;
		
		yield WaitForSeconds (1);
		
		
		NPCScript_1.vaseAlive = false;
		NPCScript_2.vaseAlive = false; 

		transform.parent = null;
		//yield WaitForSeconds (1);
		
		
		yield WaitForSeconds (2);
		
		gameObject.collider.enabled = false;
		playerstuff.vaseDestroyed = true;
		print("vaseDestroyed status: " + playerstuff.vaseDestroyed);
		playerstuff.iHavetheVase = false;
		playerstuff.vaseSavO = "destroyed";
		Destroy (gameObject);

		//yield WaitForSeconds (1);
	}
}
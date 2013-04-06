

var playerscripto: player;
var windHowl : AudioSource;
var clank : AudioSource;
//var explosion: Transform;


function OnTriggerEnter (other:Collider)

{

	if(other.gameObject.tag =="bullet" )
	{
		clank.Play();
		windHowl.Play();
		gameObject.renderer.enabled = false;
		playerscripto.exitBall.renderer.enabled = true;
		playerscripto.exitAvailable = true;
		yield WaitForSeconds (3);
		//print("object was destroyed after going invisible");
		Destroy (gameObject);
		
		//Destroy (other.gameObject);
		//Play audio clip for breaking
	}
}
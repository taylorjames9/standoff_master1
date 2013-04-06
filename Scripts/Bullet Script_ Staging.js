


var explosion: Transform;
//var playScript	:  Player_stagingScript;
//var armScript	:  ArmController_staging;


function OnTriggerEnter (other:Collider)

{
	if(other.gameObject.tag =="hatch")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Destroy (gameObject);
	}
}


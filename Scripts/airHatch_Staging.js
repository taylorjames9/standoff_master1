

var playerscripto: Player_stagingScript;
var clank : AudioSource;
var hitHatch: int = 0;
var timeLoop: float;


// Converts a white color to a black one trough time.
var lerpedColor : Color;



function Update() {

	if(playerscripto.latestTargeto == "hatch"){ 
	timeLoop = Mathf.PingPong(Time.time, 1.3);
	print("timeLoop = " + timeLoop);

    lerpedColor = Color.Lerp(Color (0.5, 0.3, 0.3, 0.5), Color (0.7, 0.7, 0.7, 0.6), timeLoop);
    
    renderer.material.color = lerpedColor;
    //print("lerpedColor= " + lerpedColor);
    }
}






function OnTriggerEnter (other:Collider)

{

	if(other.gameObject.tag =="bullet" && hitHatch%2==0 )
	{
		
		clank.Play();
		//gameObject.renderer.enabled = false;
		//renderer.material.color = Color.white;
		hitHatch++;

}

	if(other.gameObject.tag =="bullet" && hitHatch%2==1 )
	{
		
		clank.Play();
		//gameObject.renderer.enabled = false;
		//renderer.material.color = Color.white;
		hitHatch++;

	}
}
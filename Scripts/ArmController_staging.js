

var clip: AnimationClip;
var youtouchaIDraw : boolean = false; 
var playerScripto: Player_stagingScript;


function Update () {

	if(youtouchaIDraw)
		{
		animation.Play("QuickDraw");
		
		//var targetRotation = Quaternion.LookRotation(playerScripto.lastTarget - transform.position);
		//transform.rotation = targetRotation;
		
		youtouchaIDraw = false;
		audio.Play();
		
	}
		
}






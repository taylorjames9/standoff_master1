

var playerJunk	: player;
var dieMe: AnimationClip;
var deathOnce: int = 0;

function Update () 
{

	//transform.position = daBoss.transform.position;

	if(playerJunk.deadMe && deathOnce<1) 
	{
		//animation.Play("ToDieMain_2");
		//currentTransform.parent.animation.Play("BounceTest4");
		//print("just played die me");
		//playerJunk.deadMe = false; 
		
		animation.Play("DieAnimation_12");
		deathOnce++;
	}
	
}


var touchDrawNpc4 : boolean = false; 
var NPC_2_ReactionShot : boolean = false;
var NPCReact: NPCReactScript;

var retaliate2 : boolean = false;

function Update () 
{
	//if the main guy draws...there's a momentary delay...and these guys draw
	if(touchDrawNpc4 && !NPCReact.dead2 )
	{
		animation.Play("anim_drawingArmRight_npc2");
		audio.Play(19100);
		touchDrawNpc4 = false;
	}
	
	
	
}
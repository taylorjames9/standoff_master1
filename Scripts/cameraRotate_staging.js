




var target		: Transform; 
var speed 		: float = 0.05;
var startBtnHit	: boolean = false;
var btnTexture 	: Texture;
var myStyle		: GUIStyle;
var myARM		: ArmController_staging;
var btnOrbit	: Texture;
var startCounter: int = 0; 
var isButtonVisible: boolean = true;
var screenWidthMinus: int;
var screenHeightMinus: int;

var startCheck		: Player_stagingScript;
var poof: Transform;
var on_off:boolean = false;

var HoverButtonRect : Rect = new Rect(Screen.width-screenWidthMinus,Screen.height-screenHeightMinus,128,100);
private var HoverButtonHash : int = "HoverButton".GetHashCode(); 

function Update(){

	if(!startBtnHit){
		transform.LookAt(target);
		transform.Translate(Vector3.right * (Time.deltaTime+0.1));
		//print(We should be rotating);
	}
      
}



function OnGUI()
{
	if(!startBtnHit && startCounter == 0){
	 if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2-40,50,50), btnTexture, myStyle)){
     	//Debug.Log("Clicked the button with an image");
     	//destroy btnTexture
     	startBtnHit = true;
     	startCounter++; 
    	startCheck.startHit = true;
     	//isButtonVisible = true;
     	//btnTexture.renderer.enabled = false;
     	}
     }
}

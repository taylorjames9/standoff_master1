


//var NPCena_2: NPCReactScript;

var introStyle	: GUIStyle;
var introTitle  : GUIStyle;


function Update () 

{



}

function OnGUI()

{
		    GUI.BeginGroup (Rect (Screen.width/2-300, Screen.height/2-270, 700, 550));
			// All rectangles are now adjusted to the group. (0,0) is the topleft corner of the group.

			// We'll make a box so you can see where the group is on-screen.
			GUI.Box (Rect (0,0, 700,650), "");
			GUI.Label (Rect (10,50,200,200), "Room 1: \"The Vase\"", introTitle);
			GUI.Label (Rect (10,120,650,550), "You wake up. Your thoughts are fuzzy. There's a revolver in your hand that contains three bullets. In front of you, your brother and your cousin are arguing over a very expensive vase. They are both aiming their guns at each other, and threatening to shoot. \n \n Hint 1: You will lose genetic pts (g+) if family members die. \n \n Hint 2: The vase might come in handy in future rooms.  \n \n Hint 3: The only exit is a large padlocked door. It will only open if you shoot at it.", introStyle);
	
				if (GUI.Button (Rect (230,410,150,30), "Continue"))
					{
						Debug.Log("should be loading the first level");
						Application.LoadLevel ("Standoff_Scene_2");
					}

			// End the group we started above. This is very important to remember!
			GUI.EndGroup ();
}
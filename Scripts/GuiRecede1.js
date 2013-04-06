


var gun			: Texture;
var myStyle		: GUIStyle;

// Makes this button go back in depth over the example2 class one.

class GuiRecede1 extends MonoBehaviour {
    static var guiDepth : int = 0;
    function OnGUI() {
        GUI.depth = guiDepth;
        if (GUI.Button(Rect(10,Screen.height-90,150,90), gun, myStyle)) {
            guiDepth = 1;
            GuiRecede2.guiDepth = 0;
        }
    }
}


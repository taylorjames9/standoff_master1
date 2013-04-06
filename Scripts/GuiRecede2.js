

var whistle	: Texture;
var myStyle	: GUIStyle;


// Makes this button go back in depth over the example2 class one.

class GuiRecede2 extends MonoBehaviour {
    static var guiDepth : int = 1;
    function OnGUI() {
        GUI.depth = guiDepth;
        if (GUI.Button(Rect(10,Screen.height-90,150,90), whistle, myStyle)) {
            guiDepth = 1;
            GuiRecede1.guiDepth = 0;
        }
    }
}


function OnGUI ()

{
	 if (GUI.Button(Rect(Screen.width/2-100,Screen.height/4,200,50), "PlaceHolder"))
	 {
        Debug.Log("S1");
        Application.LoadLevel ("Standoff_Scene");
        }
    if (GUI.Button(Rect(Screen.width/2-100,(Screen.height/4*2)-50,200,50),"Room 1: \"The Vase\""))
    {
        Debug.Log("S2");
        Application.LoadLevel ("IntroTextScene");
        }
    if (GUI.Button(Rect(Screen.width/2-100,(Screen.height/4*3)-100,200,50),"Staging Area"))
    {
        Debug.Log("S3");
        Application.LoadLevel ("Standoff_StagingArea");
        }
}
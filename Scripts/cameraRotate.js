

var target		: Transform; 
var speed 		: float = 0.05;
var startBtnHit	: boolean = false;
var btnTexture 	: Texture;
var myStyle		: GUIStyle;
var myARM		: armController;
var btnOrbit	: Texture;
var startCounter: int = 0; 
var childhoodPic	: Texture;
var btnTexture2 : Texture;
var speechButton: Texture;
var speechButtonLight: Texture;
var weaponToggle: Texture;
var isButtonVisible: boolean = true;
var floorDestination : Vector3; 
var startCheck		: player;
var screenWidthMinus: int;
var screenHeightMinus: int;
var poof: Transform;
var childH		: childhood;
var childH2		: childhood_2;
var childH3		: childhood_3;
//var toggleBool = true;
//var childSmashButton = true;
var on_off:boolean = false;
var deathTexture : Texture2D;
var death: boolean = true; 

//var e : Event = Event.current;

//variables for draggable Button
var HoverButtonRect : Rect = new Rect(Screen.width-screenWidthMinus,Screen.height-screenHeightMinus,128,100);
private var HoverButtonHash : int = "HoverButton".GetHashCode(); 

function Update()
	{

	if(!startBtnHit){
		transform.LookAt(target);
		transform.Translate(Vector3.right * (Time.deltaTime+0.1));
		//print("We should be rotating");
	}

	//Code for manually rotating the camera around the scene
	  /*if (startBtnHit && Input.touchCount > 0 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
      	
      	  transform.LookAt(target);
		  var touchDeltaPosition:Vector3 = Input.GetTouch(0).deltaPosition;
    	  transform.Translate (-touchDeltaPosition.x*speed,0,0);
    	  }*/
      
      if(Input.GetMouseButtonDown(0)) 
       {
      
      		//print("un touche");
        	var ray: Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        	var hit : RaycastHit;
        	Debug.DrawRay (ray.origin, ray.direction * 100, Color.yellow);

        // if your ray hits something
        if (Physics.Raycast (ray, hit)) 
           {
         //shows what it hit
            //Debug.Log(" You just hit " + hit.collider.gameObject.name);
            //print("raycast successful. You hit" + hit.collider.gameObject.name);
            // if the ray hits a object tagged ""
            if (hit.collider.gameObject.tag == "MainCharacter")
            {
            	myARM.youtouchaIDraw = true; 
            	//Debug.Log("I'm pulling this out because you touched me.");
            	//print("I'm pulling this out because you touched me.");
            }
            if (hit.collider.gameObject.tag == "floor")
            {
            
            	//print("you hit the " + hit.collider.gameObject.tag + "at coordinates" + hit.point);
            	//print(hit.point);
            	var floorDestination = hit.point;
            	//print("floorDestination " + floorDestination);
            	//mainGuyBody.iCanMove = true;  
            }
        }
    }
}


function OnGUI()
{

	if(death){
	//var color = color.red;
	//print("should be red");
	guiTexture.color = Color.red;
	//deathTexture.color.a = 0.4;
	GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height),deathTexture);
	}


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
     //red drawGun button	
     /*if (GUI.Button(Rect(Screen.width-30,Screen.height-30,20,20),btnTexture2))
		{
			if(startBtnHit){
     		Debug.Log("Draw");
     		myARM.youtouchaIDraw = true;
     		}
     	}*/

     	//rotate button
     	if (GUI.Button(Rect(10,10,80,80),btnOrbit, myStyle)){
     		startCounter++; 
     	
     		if(startCounter%2 ==0)
     		{
     			//Debug.Log("Resume Rotation " + startCounter );
     			startBtnHit = false;
     			//Debug.Log("Upped StartCounter to " + startCounter );	
     		}
     	
     	   if(startCounter%2 ==1)
     		{
     		    startBtnHit = true;
     		    //print("this is the 2nd hit. The value of startBtnHit is: " + startBtnHit);
     		}
     	}
     	
     	   	if (GUI.Button(Rect(10,100,80,40),"Main Menu"))
     	   	{
     			Debug.Log("Load Main Menu");
        		Application.LoadLevel ("MainMenuScene");

     		}
     	
     	
     	
     	
     on_off = GUI.Toggle(Rect(Screen.width-75,10,140,140), on_off, childhoodPic, myStyle);	
     	
     if(on_off == true)
     	{
     		childH.childSee = true;
     		childH2.childSee2 = true;
     		childH3.childSee3 = true;
     		
     	}
     	
     	else
     	{
     		childH.childSee = false;
     		childH2.childSee2 = false;
     		childH3.childSee3 = false;
     	}
     	

     //Weapon button
     /*if (GUI.Button(Rect(10,Screen.height-90,150,90),weaponToggle, myStyle))
     {
     			
     }*/
    

	if ( isButtonVisible ) {
    switch (HoverButton(HoverButtonRect, new GUIContent(speechButtonLight), myStyle)) 

    { 

        case EventType.mouseDown: 

            Debug.Log("MouseDown");
            isButtonVisible = true;
            Debug.Log("isButtonVisible is "+ isButtonVisible); 
            break;

        case EventType.mouseDrag: 
				
    			HoverButtonRect.x = Input.mousePosition.x - (HoverButtonRect.width * .5); 
            	HoverButtonRect.y = (Screen.height - Input.mousePosition.y) - (HoverButtonRect.height * .5); 
            
            	break; 

  	     case EventType.mouseUp: 
			
            Debug.Log("MouseUp"); 
            //Instantiate (poof, Vector3(HoverButtonRect.x,HoverButtonRect.y,0),Quaternion.identity);           
            
            var mousePos : Vector3 = Input.mousePosition;
            print("mouse position Vector3 is:" + mousePos);
            mousePos.z = 5.0;
            var worldPos : Vector3 = camera.ScreenToWorldPoint(mousePos);
            //print("worldPosition of mousePoint is: " + worldPos);
            //Debug.Log("Mouse pos: " + mousePos + "   World Pos: " + worldPos + "   Near Clip Plane: " + camera.nearClipPlane);
            Instantiate(poof, worldPos, Quaternion.identity);
            //Instantiate(poof, transform.position, transform.rotation);
            //print("should play poof");
            
            //Debug.Log("isButtonVisible is "+ isButtonVisible);
			isButtonVisible = false;
            break; 

    	} 
    }
    
     if (GUI.Button(Rect(Screen.width-screenWidthMinus,Screen.height-screenHeightMinus,128,100),speechButton, myStyle))
     {
     			
     }
          
}


function HoverButton(position : Rect, content : GUIContent, style : GUIStyle) : EventType { 

    var controlID : int = GUIUtility.GetControlID(HoverButtonHash, FocusType.Native); 

    switch (Event.current.GetTypeForControl(controlID)){ 

        case EventType.mouseDown: 

            if (position.Contains(Event.current.mousePosition)){ 

                GUIUtility.hotControl = controlID; 

                Event.current.Use(); 

                return EventType.mouseDown; 

            } 

            break;

        case EventType.mouseUp: 

            if (GUIUtility.hotControl != controlID){

                return EventType.ignore;

            } 

            GUIUtility.hotControl = 0; 

            Event.current.Use(); 

            if (position.Contains(Event.current.mousePosition)){

                return EventType.mouseUp;

            }

            else {

                return EventType.ignore;

            }

        case EventType.mouseDrag: 

            if (GUIUtility.hotControl == controlID){ 

                Event.current.Use(); 

                return EventType.mouseDrag; 

            } 

            else {

                return EventType.ignore;

            }

        case EventType.repaint: 

            style.Draw(position, content, controlID); 

            if (position.Contains(Event.current.mousePosition)) 

                return EventType.mouseMove; 

            else 

                return EventType.repaint; 

    } 

    if (position.Contains(Event.current.mousePosition)) 

        return EventType.mouseMove; 

    else 

        return EventType.ignore; 

}


/*var vertexList = new Array();
var lr : LineRenderer;

//var c1 : Color = Color.yellow;
//var c2 : Color = Color.red;


function Start() 
{

     //lineRenderer.SetVertexCount(lengthOfLineRenderer);
}


function Update () 
{
	var lr = gameObject.AddComponent(LineRenderer);
    //lr.material = new Material (Shader.Find("Mobile Vertex Colored"));
    //lr.SetColors(c1, c2);
    lr.SetWidth(0.2,0.2);
    vertexList.push(transform.position);
    vertexList.push(Vector3(4, 0.41, 8));
    //vertexList.push(Vector3(4, 1, 0));
    lr.SetVertexCount(vertexList.length);
    for(var i=0; i<vertexList.length; i++){
        lr.SetPosition(i, vertexList[i]);
    }
}

var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var lengthOfLineRenderer : int = 20;

function Start() {
     var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
     lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
     lineRenderer.SetColors(c1, c2);
     lineRenderer.SetWidth(0.2,0.2);
     lineRenderer.SetVertexCount(lengthOfLineRenderer);
}

function Update() {
    var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    for(var i : int = 0; i < lengthOfLineRenderer; i++) {
        var pos : Vector3 = Vector3(i * 0.5, Mathf.Sin(i + Time.time), 0);
        lineRenderer.SetPosition(i, pos);
    }
}*/

// the options

/*var startWidth = 0.5;
var endWidth = 0.5;
var aMaterial : Material;
var childSee = false; 
//var line = this.gameObject.AddComponent(LineRenderer);
//var spotFinderNPC1;
//var spotFinderNPC2;

// these are set in start

private var line : LineRenderer;
private var point01 : Vector3;
point01 = GameObject.Find("NPC_1 CollisionBox").transform.position;
private var point02 : Vector3;
point02 = GameObject.Find("1MainGuy").transform.position;

//private var point03 = Vector3(0,0.5,0);
//private var point04 = Vector3(0,0.5,0);
//private var point05 = Vector3(0,0.5,0);
 
*/

var childSee = false; 
var aMaterial : Material;

function Update ()

{
   if(childSee == true)
   {
   	DrawLine();
   }
   
   if(childSee == false)
   {
   	resetLaser();
   }
   
   
   	//Clear the line 
	/*if(!Input.GetMouseButton(0))
	{
	    var lineRenderer = GetComponent(LineRenderer);
	    lineRenderer.SetPosition(0,new Vector3(0,0,0));
	    lineRenderer.SetPosition(1,new Vector3(0,0,0));
	}*/
   
   //DrawLine();

}


//public var isShowingLaser:boolean = false;

function showLaser()
{
   
   //if(isShowingLaser){
   this.renderer.enabled = true;

   //}
   //yield WaitForSeconds (10.05);
   //resetLaser();
   //isShowingLaser = false;
}

function resetLaser()
{    
   this.renderer.enabled = false;
}

function DrawLine()
{   

		print("drawline function was just triggered");
		
	    var mainGuyPos: Vector3 = GameObject.Find("lineCatcher").transform.position; 
	    var NPCPos: Vector3 = GameObject.Find("NPC_1_LineCatcher").transform.position;
	    var NPCPos2: Vector3 = GameObject.Find("NPC_2_LineCatcher").transform.position; 
		
		print("this is the position of mainGuy" + mainGuyPos);
		print("this is the position of NPC_1" + NPCPos);	

		print("line should now be visible.");
	    var lineR = GetComponent(LineRenderer);
	 	lineR.renderer.enabled = true;
	    lineR.SetPosition(0, Vector3(mainGuyPos.x, mainGuyPos.y-1, mainGuyPos.z));
	    lineR.SetPosition(1, Vector3(NPCPos.x,NPCPos.y-1,NPCPos.z));
	    
	    /*ar lineR_2 = gameObject.AddComponent(LineRenderer);
	 	lineR_2.renderer.enabled = true;
	 	lineR_2.material = aMaterial;
	 	lineR_2.SetWidth(0.2,0.2);
     	lineR_2.SetVertexCount(2);
	 	lineR_2.SetPosition(0, Vector3(mainGuyPos.x, mainGuyPos.y-1, mainGuyPos.z));
	 	lineR_2.SetPosition(1, Vector3(NPCPos2.x,NPCPos2.y-1,NPCPos2.z));*/
	    //yield;
    }

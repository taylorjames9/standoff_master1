

 
var targetPosition	: Vector3; 
var startHit 		: boolean = false; 
var myARM			: ArmController_staging;
var floorHit		: boolean = false;
var shootScript		: shootScript_staging;
var hatch			: Transform;
var lastTarget		: Vector3;
var latestTargeto	: String;
var maxMoveDistance	: int = 2;
//var defactoRotation	: Vector3;



function Start(){

	//lastTarget = hatch.position;
	
	
}
 
function Update () {


	//var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
	//transform.rotation = targetRotation;

	var defactoRotation = Quaternion.LookRotation(lastTarget - transform.position);
	transform.rotation = defactoRotation;


	if(startHit && Input.GetKeyDown(KeyCode.Mouse0))
	{
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
 	
		if (Physics.Raycast (ray, hit)) {
			var targetPoint = hit.point;
			targetPoint.y = 1.23;
			targetPosition = hit.point;
			targetPosition.y = 1.23; 
			
			var scriptFinder: shoot = FindObjectOfType(shoot);

   	  	  if(hit.collider.gameObject.tag == "hatch"){
   	  	  	var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
			transform.rotation = targetRotation;
   	  		myARM.youtouchaIDraw = true;
		    shootScript.aimingAT_Hatch++;
		    shootScript.mainTargetName = "Metal Door";
		    shootScript.mainTargetDistance = Vector3.Distance(transform.position, hatch.position);
		    lastTarget = hatch.position;
		    latestTargeto = hatch.tag;
   	  		}
   	  	}
   	}
}

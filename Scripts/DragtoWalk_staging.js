

#pragma strict

private var dragging : boolean = false;
private var moving : boolean = false;
private var travelling : boolean = false;
private var countDrag : int = 0;
private var countMove : int = 0;
private var mousePosition : Vector3;
private var mousePoint : Vector3;
private var pointCurrent : Vector3;
private var pointStore : Vector3;
private var targetWaypoint : Vector3;
private var moveDirection : Vector3;
var moveSpeed : float = 3.0;
private var wayRotation : Quaternion;
var damping : float = 6.0;
private var posStoreX : Array = [];
private var posStoreZ : Array = [];
private var arrayPathMarker : GameObject[] = new GameObject[100];
var objectPathMarker : GameObject;
var playScripto: Player_stagingScript;

private var imSelected : Transform;
private var imClickedOn : boolean = false;
private var startPosY : float = 0.0;

function Start () {
	dragging = false;
	startPosY = transform.position.y;
}

function Update () {

	if (!moving) {
		var rayHit : RaycastHit;
		if(Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), rayHit)) {
			
			
			if(rayHit.collider.gameObject.tag == "floor" || rayHit.collider.gameObject.tag == "TouchBase_Character"){
			
			mousePoint = rayHit.point;
			
			// select this object from being clicked on
			imSelected = rayHit.transform;
			if (imSelected == this.transform) {imClickedOn = true; print("imClicked on is: " + imClickedOn);}
	
			if (Input.GetMouseButtonDown(0)) {
			print("imSelected NOW - " + imClickedOn);
				if (imClickedOn) {OnTouchBegin(mousePoint);} // check if object has been clicked on
			}
			else if (Input.GetMouseButton(0)) {
				if (dragging) {OnTouchMove(mousePoint);} // check in-case mouse is down when object travelling is set to false with (dragging)
			}
			else if (Input.GetMouseButtonUp(0)) {
				if (dragging) {OnTouchEnd(mousePoint);} // check in-case mouse is released when object travelling is set to false with (dragging)
				}
			}
		}
	}
}

function OnTouchBegin (pointCurrent : Vector3) {
	countDrag = 0;
	posStoreX.Clear();
	posStoreZ.Clear();
	AddSplinePoint(pointCurrent);
	dragging = true;
	moving = false;
}

function OnTouchMove (pointCurrent : Vector3) {
    
    if ((dragging) && (countDrag < 15)) {
		AddSplinePoint(pointCurrent);
		travelling = true;
    } else {
		dragging = false;
		moving = true;
    }
}

function OnTouchEnd (pointCurrent : Vector3) {
	dragging = false;
	moving = true;
	if (imSelected) {imSelected = null; imClickedOn = false;} // reset 'select this object if clicked on'
}

function AddSplinePoint (pointStore : Vector3) {
    // store co-ordinates
    posStoreX[countDrag] = pointStore.x;
    posStoreZ[countDrag] = pointStore.z;
	// show path : Instantiate and load position into array as gameObject
    arrayPathMarker[countDrag] = Instantiate(objectPathMarker, Vector3(pointStore.x, startPosY, pointStore.z), transform.rotation);
    // next position
    countDrag ++;
}

function FixedUpdate () {

	// -- move gameObject
	if ((travelling) && (posStoreX[countMove] != null)){
		
		// --
		
		// move aircraft along path in time
		targetWaypoint = Vector3(posStoreX[countMove], startPosY, posStoreZ[countMove]);
		moveDirection = targetWaypoint - transform.position;
		
		if(moveDirection.magnitude < 1) {
			Destroy (arrayPathMarker[countMove]); // remove current path marker
			countMove++; // next waypoint position
		} else {		
			transform.position += moveDirection.normalized * moveSpeed * Time.deltaTime; // move gameObject
			//transform.LookAt(targetWaypoint);
			//wayRotation  = Quaternion.LookRotation(targetWaypoint - transform.position);
			//transform.rotation = Quaternion.Slerp(transform.rotation, wayRotation , Time.deltaTime * damping);
		}
		
		if (countMove >= posStoreX.length) {finishTravelling ();} // stop at end of path
		
		// --
		
	} else {
		countMove = 0;
	}
	
	// -- aircraft flying normally
	/*if (!travelling) {
		transform.position += (transform.forward * moveSpeed * Time.deltaTime);
	}*/
	
	// print out of current stored array
	if (Input.GetKeyDown("r")) {print ("posStoreX "+posStoreX+" : posStoreZ "+posStoreZ);}
}

function finishTravelling () {
	countMove = 0;
	moving = false; 
	if (imSelected) {imSelected = null; imClickedOn = false;} // reset 'select this object if clicked on'
	travelling = false; 
}

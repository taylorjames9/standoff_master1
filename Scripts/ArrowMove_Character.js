var moveSpeed = 2.0;
var turnSpeed = 10.0;



function Update () {


if(Input.GetButton("forward")){
transform.position += transform.forward*moveSpeed*Time.deltaTime;

}

if(Input.GetButton("backwards")){
transform.position -= transform.forward*moveSpeed*Time.deltaTime;

}

if(Input.GetButton("turnL")){
transform.eulerAngles.y += -turnSpeed*Time.deltaTime;

}

if(Input.GetButton("turnR")){
transform.eulerAngles.y += turnSpeed*Time.deltaTime;

}

if(Input.GetButton("turnUp")){
transform.eulerAngles.x += -turnSpeed*Time.deltaTime;

}

if(Input.GetButton("turnDwn")){
transform.eulerAngles.x += turnSpeed*Time.deltaTime;

}

}


var prefabBullet: Transform;
var shootForce: float;
var youCanShoot : int = 0;
var audioGunShot: AudioSource;
var aimingAT_Hatch:int =0;
//var myBullets: int = 3;
var fadeMultiplier: float = 1;
var dryFire: AudioSource;
var playerScripto: Player_stagingScript;

var mainTargetName: String;
var mainTargetDistance: float = 10;
//var chanceHit: float = 10.0;

function Start()
{
	 mainTargetName = "Nothing";
	 
}


function Update () 
{

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;

		if (Physics.Raycast (ray, hit, 100)) {
			if(Input.GetButtonDown("Fire1") && (aimingAT_Hatch>1))
				{
					var instanceBullet_21 = Instantiate(prefabBullet, transform.position, Quaternion.identity);
					instanceBullet_21.rigidbody.AddForce(((hit.point + Vector3(Random.Range(-0.2, 0.3), 0, Random.Range(-0.5, 0.5))) - transform.position) * shootForce);
					Physics.IgnoreCollision(instanceBullet_21.collider, collider);
					audioGunShot.Play();
					aimingAT_Hatch=0;

				}		
			}	
		
		}


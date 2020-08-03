function tree(arr, n) {
var arr=[];
var arr=[4,3,7,8,6,2,1];

//var arr=[];

var n = arr.length; 

flag = true;

var temp = 0;

for (var i=0; i<=n-2; i++)

{
if(flag)
{
if(arr[i] > arr[i+1])
{

temp=arr[i];
arr[i]=arr[i+1];
arr[i+1]=temp;
}
}







else
{

if(arr[i]<arr[i+1])
{
temp = arr[i]; 
                    arr[i] = arr[i+1]; 
                    arr[i+1] = temp; 
                } 
            } 
            flag = !flag; /* flip flag */
        } 

        return arr;
    } 

console.log( tree());




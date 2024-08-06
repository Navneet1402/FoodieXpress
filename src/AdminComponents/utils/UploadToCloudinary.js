const upload_preset = "FoodieXpress"
const cloud_name="dp3hbotpg"
const api_url=""

export const uploadImageToCloudinary = async(file)=>{
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name", cloud_name);

    const response = await fetch
    ( `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
        method:"POST",
        body:data
    });

    const fileData = await response.json();
    console
    return fileData.url

}
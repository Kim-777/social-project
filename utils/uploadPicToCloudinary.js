import axios from "axios";

const uploadPic = async (media) => {

    try {
        const form = new FormData();
        form.append('file', media);
        form.append('upload_preset', 'together-today');
        form.append('cloud_name', 'dg8hflaut');

        const res = await axios.post(process.env.CLOUDINARY_URL, form)

        return res.data.url;

    } catch (error) {
        return;
    }

};

export default uploadPic;
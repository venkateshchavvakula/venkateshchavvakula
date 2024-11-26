const updateMeta = (attr,value) => {
    document.querySelector(`meta[name="${attr}"]`).setAttribute("content", value);
};

export default updateMeta;
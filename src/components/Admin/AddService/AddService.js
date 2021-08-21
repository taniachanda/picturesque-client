import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { FaCamera } from 'react-icons/fa'
import Sidebar from '../../Sidebar/Sidebar'
import axios from 'axios'

const AddService = () => {
  const { register, handleSubmit } = useForm()
  const [imageURL, setImageURL] = useState(null)

  const onSubmit = (data) => {
    const serviceData = {
      title: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    }
    const url = `https://cryptic-inlet-98692.herokuapp.com/addService`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log('server site response', res))
  }

  const handleImageUpload = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key', '2159b67279a85b6c11df81c60487635e')
    imageData.append('image', event.target.files[0])
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        // console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
    <Sidebar/>
      <div className="container-Fluid cf-sec">
        <div className="container pt-5">
          <div className="row d-flex align-items-center justify-content-center pb-3 raw-sec">
            <h1 className="mt-3 text-center text-dark">Add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
              <label className="form-label text-white font-weight-bold mt-2">
                Name
              </label>
              <input
                className="form-control"
                placeholder="Name"
                name="name"
                defaultValue=""
                {...register('name')}
              />
              <label className="form-label text-dark font-weight-bold mt-2">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder=" Description"
                name="description"
                defaultValue=""
                {...register('description')}
              />
              <label className="form-label text-dark font-weight-bold mt-2">
                Price
              </label>
              <input
                className="form-control form-control"
                placeholder=" Price"
                price="price"
                defaultValue=""
                {...register('price')}
              />
              <label className="form-label text-dark font-weight-bold mt-2">
                {/* <FaCamera color="skyblue" size="1.5em" />  */}
                Add a image
              </label>

              <div className="custom-file">
                <input
                  name=""
                  className="custom-file-input hidden"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
              <button className="btn btn-b mt-3" size="lg" type="submit">
                Add Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddService

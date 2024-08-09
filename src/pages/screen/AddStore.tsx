import { useState } from "react";
import { createStore } from "../../api/StoreApi";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [storeSocialMediaAcc, setStoreSocialMediaAcc]: any = useState("");
  const [storeEmail, setStoreEmail]: any = useState("");
  const [storeUrl, setStoreUrl]: any = useState("");
  const [description, setDescription]: any = useState("");
  const [storeName, setStoreName]: any = useState("");

  const formData = new FormData();
  const storeID = useParams()

  formData.append("category", category);
  formData.append("storeSocialMediaAcc", storeSocialMediaAcc);
  formData.append("storeEmail", storeEmail);
  formData.append("storeUrl", storeUrl);
  formData.append("description", description);
  formData.append("storeName", storeName);

  const onhandleImageUpload = (e: any) => {
    let file = e.target.files;
    console.log(file);
    for (let i of file) {
      formData.append("image", i);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 bg-white h-[100%] w-full justify-center items-center flex z-[2] "
      style={{
        background: " rgba( 255, 255, 255, 0.15 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 7px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      {/* <div className="w-full h-full absolute top-0 left-0 hover:cursor-pointer " /> */}
      <div className="flex justify-center border small:border-none small:ml-2 small:p-2 p-5 small:mr-2 rounded-md absolute z-[3]  ">
        <div className=" ml-4">

          <div className="flex flex-col mt-3 ">
            <input
              placeholder="storeName"
              type="text"
              className="border rounded-md small:text-[12px] mobile:text-[12px] w-[300px] h-[50px] small:h-[35px] mobile:h-[35px] my-2 pl-2 outline-none text-[15px] "
              value={storeName}
              onChange={(e:any)=>setStoreName(e.target.value) }
            />
            <input
              placeholder="storeEmail"
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="email"
              value={storeEmail}
            onChange={(e: any) => setStoreEmail(e.target.value)}

            />
            <input
              placeholder="storeUrl"
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="url"
              value={storeUrl}
              onChange={(e:any)=>setStoreUrl(e.target.value) }

            />
            <input
              placeholder="StoreSocialMediaAccount optional"
              className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px] "
              type="text"
              value={storeSocialMediaAcc}
              onChange={(e:any)=>setStoreSocialMediaAcc(e.target.value) }

            />
            <select
            className="border rounded-md w-[300px] h-[50px] small:text-[12px] mobile:text-[12px] my-2 pl-2 small:h-[35px] mobile:h-[35px] outline-none text-[15px]"
            name="category"
            id="category-select"
            value={category}
            onChange={(e: any) => setCategory(e.target.value)}
            >
            <option value="">Select a category</option>
            <option value="ugwu">Ugwu</option>
            <option value="bitte">bitte</option>
            <option value="pepper">pepper</option>
            <option value="tomato">tomato</option>
            </select>


            <textarea 
            placeholder="storeDescription"
            className="border rounded-md w-[300px] h-[50px] my-2 pl-2 small:text-[12px] mobile:text-[12px] outline-none text-[15px] resize-none "
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}

            />

              <label
              htmlFor="pix"
              className="flex items-center h-[50px] justify-center text-white bg-purple-900 hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm mb-4 "
              onClick={() => {
                // setToggle(false);
              }}
            >
              upload images
            </label>
            <input
              id="pix"
              className="hidden"
              onChange={onhandleImageUpload}
              type="file"
              accept=".jpg,.png,.jpeg"
              multiple
            />
            <div
              className="flex items-center h-[50px] justify-center small:text-[12px] mobile:text-[12px] text-white bg-[#fa9608] hover:cursor-pointer duration-300 transition-all hover:scale-[1.02] rounded-sm small:h-[35px] mobile:h-[35px]  "
              onClick={() => {
                createStore(formData,storeID).then((res) => {
                  console.log(res);
                });
              }}
              >
              Add Store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

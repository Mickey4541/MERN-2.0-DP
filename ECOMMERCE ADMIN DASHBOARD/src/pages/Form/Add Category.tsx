    import { ChangeEvent, FormEvent, useState } from 'react';
    import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
    import { addCategory } from '../../store/dataSlice';
    import { useAppDispatch, useAppSelector } from '../../store/hooks';
    import { Status } from '../../types/status';
    import { useNavigate } from 'react-router-dom';

    // interface Category {
    // categoryName: string;
    // id: string;
    // }

    const AddCategory = () => {
    const { status } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const [data, setData] = useState<{
        categoryName : string
    }>({
        categoryName: '',
      
    });

 

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, value } = e.target 
        setData({
        ...data,
        [name] : value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(addCategory(data));
        if (status === Status.SUCCESS) {
        navigate('/tables');
        } else {
        navigate('/forms/add-category');
        }
    };

    return (
        <>
        <Breadcrumb pageName="Form Layout" />

        <div className="flex items-center justify-center h-screen overflow-hidden">
            <div
            className="bg-white w-full lg:w-9/12 md:w-6/12 shadow-3xl"
            style={{ marginTop: '-200px' }}
            >
            <form className="p-3 md:p-5" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label
                    htmlFor="productName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    category Name
                </label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    className="w-full text-black bg-gray-200 md:py-2 focus:outline-none"
                    placeholder="category Name"
                />
                </div>
                
                <button className="w-full p-2 font-medium text-white uppercase bg-gradient-to-b from-gray-700 to-gray-900 md:p-4">
                Add category
                </button>
            </form>
            </div>
        </div>
        </>
    );
    };

    export default AddCategory;

import { useProductStore } from '../store/product'; 
import { useState } from "react"; 
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const { deleteProduct, updateProduct  } = useProductStore(); 
    
    const { isOpen, onClose } = useDisclosure();

    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid); 
        if(!success) {
            console.log("it didn't work");
        } else {
            console.log("it worked");
        }
    }

    const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if(!success) {
            console.log("it didn't work");
        } else {
            console.log("it worked");
        }
	};
    
    return ( 
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.image}</p>
            <Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
                        <input type="text" placeholder="Product Name" value={updatedProduct.name} name="name" onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>
                        <input type="text" placeholder="Price" value={updatedProduct.price} name="price" onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}/>
                        <input type="text" placeholder="Image" value={updatedProduct.image} name="image" onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}/>
					</ModalBody>

					<ModalFooter>
                        <button onClick={() => handleUpdateProduct(product._id)}>Update</button>
						<button onClick={onClose}>cancel</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
            <button onClick={() => handleDeleteProduct(product._id)}>delete</button>
        </div>
    );
};

export default ProductCard; 
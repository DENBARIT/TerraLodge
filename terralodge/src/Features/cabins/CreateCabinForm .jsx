import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {createCabin} from "../../services/apiCabins";
import FormRow from "../../ui/FormRow"



function CreateCabinForm({cabinToEdit={}}) {
const {id:editId,...editValues}=cabinToEdit;
const isEditSession=Boolean(editId);
  
  const queryClient=useQueryClient();
   const {register,handleSubmit,reset,getValues,formState,watch} = useForm(
{
defaultValues:isEditSession?editValues:{}
}

   );
const {errors}=formState;
const regularPrice=watch("regularPrice");
const {mutate,isPending:isCreating}=useMutation(
  { mutationFn:createCabin,
  
onSuccess:()=>{
  toast.success("Cabin created successfully");
 queryClient.invalidateQueries({queryKey:["cabin"] });
   reset();
},
onError:(err)=>toast.error(err.message)

});
   function onSubmit(data){
    mutate({...data,image:data.image[0]});
   }  
   function onError(error){
    // console.log(error)
   }
  return (
    <Form  onSubmit={handleSubmit(onSubmit,onError)}>
   {/* <FormRow> 
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name",
        {
          required:"This field is required",
        }
        )} />
        {errors?.name?.message &&
          <Error>{errors.name.message}
          </Error>}
      </FormRow> */}
<FormRow label="Cabin name" error={errors?.name?.message}>

<Input type="text" id="name" {...register("name",
        {
          required:"This field is required",
        }
        )} 
        disabled={isCreating}
        />

</FormRow>
      {/* <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",
        {
          required:"This field is required",
          min:{value:1,
            message:"Capacity should be at least 1"
          }
        }

        )} /> 
      </FormRow>*/}
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>

<Input type="number" id="maxCapacity" {...register("maxCapacity",
        {
          required:"This field is required",
          min:{value:1,
            message:"Capacity should be at least 1"
          }
        }

        )}
          disabled={isCreating}
        /> 

      </FormRow>

      {/* <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice",
        {
          required:"This field is required",
          min:{value:1,
            message:"Capacity should be atleast 1"

          }
        })} />
      </FormRow> */}
      <FormRow label="regular price" error={errors?.regularPrice?.message}>
          <Input type="number" id="regularPrice" {...register("regularPrice",
        {
          required:"This field is required",
          min:{value:1,
            message:"Capacity should be atleast 1"

          }
        })}
         disabled={isCreating}
         />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
  <Input type="number" id="discount" defaultValue={0} {...register("discount",
        {
          required:"This field is required",
          validate:((value)=>Number(value)<=Number(getValues().regularPrice)||"Discount should be less than the regular price")
        })}   disabled={isCreating} />
      </FormRow>

      {/* <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} {...register("discount",
        {
          required:"This field is required",
          validate:((value)=>value<=getValues().regularPrice||"Discount should be less than the regular price")
        })} />
      </FormRow> */}


      <FormRow label="Description for website" error={errors?.description?.message}>
 <Textarea type="number" id="description" defaultValue="" {...register("description",
        {
          required:"This field is required",
        })}    disabled={isCreating} />
        </FormRow>
{/* 
      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" {...register("description",
        {
          required:"This field is required",
        })}  />
      </FormRow> */}

<FormRow label="Cabin photo">
 <FileInput id="image" accept="image/*"  {...register("image")}  disabled={isCreating}/>
</FormRow>
      {/* <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow> */}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation="secondary" $size="medium" type="reset">
          Cancel
        </Button>
        <Button $variation="primary" $size="medium" disabled={isCreating} type="submit">
          Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}
export default CreateCabinForm;

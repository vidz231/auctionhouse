import { ArrowBack } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
  type RichTextEditorRef,
} from "mui-tiptap";
import { useRef } from "react";
import StarterKit from "@tiptap/starter-kit";

export default function CreateProduct() {
  const rteRef = useRef<RichTextEditorRef>(null);
  return (
    <div>
      <div className="mr-4 flex items-center">
        <Link to="/admin/product" className="text-2xl">
          <ArrowBack fontSize="small" className="-translate-y-0.5 pr-1" />
          <div className="inline-block font-bold text-xl">Product</div>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-4">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            className="text-sm"
          />
          <TextField
            id="outlined-basic"
            label="Image"
            variant="outlined"
            size="small"
            className="text-sm"
          />
          <div>
            <RichTextEditor
              ref={rteRef}
              extensions={[StarterKit]}
              content="<p>Description</p>"
              renderControls={() => (
                <MenuControlsContainer>
                  <MenuSelectHeading />
                  <MenuDivider />
                  <MenuButtonBold />
                  <MenuButtonItalic />
                </MenuControlsContainer>
              )}
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            size="small"
            className="text-sm"
          />
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            size="small"
            className="text-sm"
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
              size="small"
              value={"Other"}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Vibrant</MenuItem>
              <MenuItem value={20}>Fresh</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="made-in">Made in</InputLabel>
            <Select
              labelId="made-in"
              id="made-in"
              label="Madein"
              size="small"
              value={"Vietnam"}
              // onChange={handleChange}
            >
              <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
              <MenuItem value={20}>England</MenuItem>
              <MenuItem value={30}>Japan</MenuItem>
            </Select>
          </FormControl>
          <div className="w-[80px] flex justify-center text-white px-3 py-1 hover:bg-red-400 font-semibold bg-red-500 rounded-md">
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button, Spinner as FlowbiteSpinner } from "flowbite-react";

const SpinnerComponents = () => {
    return (
        <div className="flex flex-row gap-3">
            <Button>
                <FlowbiteSpinner aria-label="Spinner button example" size="sm" light />
                <span className="pl-3">Loading...</span>
            </Button>
            <Button color="alternative">
                <FlowbiteSpinner aria-label="Alternate spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
            </Button>
        </div>
    );
};

export default SpinnerComponents;

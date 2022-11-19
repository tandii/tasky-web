import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export function RadioGroup(props) {
    return (
        <RadioGroupPrimitive.Root
            aria-label=""
            defaultValue={props.sendEmail}
            onValueChange={props.setSendEmail}
        >
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <RadioGroupPrimitive.Item
                        value={true}
                        className=
                        "peer relative w-4 h-4 rounded-full border border-gray-200 bg-gray-100"
                    >
                        <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                            <div className="w-2 h-2 rounded-full bg-green-700"></div>
                        </RadioGroupPrimitive.Indicator>
                    </RadioGroupPrimitive.Item>
                    <label
                        htmlFor="yes"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                        Yes
                    </label>
                </div>

                <div className="flex items-center gap-2">
                    <RadioGroupPrimitive.Item
                        value={false}
                        className=
                        "peer relative w-4 h-4 rounded-full border border-gray-200 bg-gray-100"
                    >
                        <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                            <div className="w-2 h-2 rounded-full bg-green-700"></div>
                        </RadioGroupPrimitive.Indicator>
                    </RadioGroupPrimitive.Item>
                    <label
                        htmlFor="no"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                        No
                    </label>
                </div>
            </div>
        </RadioGroupPrimitive.Root>
    )
}
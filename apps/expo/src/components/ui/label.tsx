import * as React from "react";

import * as LabelPrimitive from "~/components/primitives/label";
import { cn } from "~/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Text>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text>
>(
  (
    {
      className,
      onPress,
      onLongPress,
      onPressIn,
      onPressOut,
      testID,
      ...props
    },
    ref,
  ) => (
    <LabelPrimitive.Root
      testID={testID ? `${testID}-label-pressable` : undefined}
      className="web:cursor-default"
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        testID={testID ? `${testID}-label-text` : undefined}
        ref={ref}
        className={cn(
          "native:text-base web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70 text-sm font-medium leading-none text-foreground",
          className,
        )}
        {...props}
      />
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

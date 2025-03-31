<script setup lang="ts">
import { Copy } from "lucide-vue-next"
import { Input } from "~/components/ui/input"
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot>
        <Button variant="outline"> Share </Button>
      </slot>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share your email</DialogTitle>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <Input
            id="link"
            default-value="example@mail.com"
            read-only />
        </div>
        <Button
          type="submit"
          size="sm"
          class="px-3">
          Send
          <span class="sr-only">Send</span>
        </Button>
      </div>
      <DialogFooter class="sm:justify-start">
        <DialogClose as-child>
          <Button
            type="button"
            variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"

import {
  Pagination,
  PaginationList,
  PaginationListItem,
  PaginationNext,
} from "@/components/ui/pagination"
</script>

<template>
  <Pagination
    v-slot="{ page, pageCount }"
    :items-per-page="10"
    :total="100"
    :sibling-count="2"
    :show-edges="false"
    :default-page="1">
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-2">
      <template v-for="(item, index) in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child>
          <Button
            class="h-11 w-11 rounded-xl p-0"
            :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
      </template>
      <PaginationNext class="h-11 w-11 rounded-xl p-0" />
    </PaginationList>
  </Pagination>
</template>

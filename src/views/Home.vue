<template>
  <div class="home">
	  <Header />
	  <Title content="Deelnemers" />
	  <Card content="Pietje" />
  </div>
</template>

<script>

import Button from "@/components/Button"
import Header from "@/components/Header"
import Title from "@/components/Title"
import Card from "@/components/Card"

export default {
    name: 'Home',
	components : {Card, Title, Header, Button},
}
</script>

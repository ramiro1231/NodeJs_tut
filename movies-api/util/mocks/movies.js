const moviesMock =
    [{ "id": "1c73f2ba-c374-4bfb-a5f5-6e7aa507ccf8", "title": "Leave It to Beaver", "year": 2001, "cover": "http://dummyimage.com/238x171.jpg/5fa2dd/ffffff", "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "duration": 87, "contentRating": "G", "sourcer": "https://nationalgeographic.com/mus.xml?id=commodo&consequat=placerat&in=praesent&consequat=blandit&ut=nam&nulla=nulla&sed=integer&accumsan=pede&felis=justo&ut=lacinia&at=eget&dolor=tincidunt&quis=eget&odio=tempus&consequat=vel&varius=pede&integer=morbi&ac=porttitor&leo=lorem&pellentesque=id&ultrices=ligula&mattis=suspendisse&odio=ornare&donec=consequat&vitae=lectus&nisi=in&nam=est&ultrices=risus&libero=auctor&non=sed&mattis=tristique&pulvinar=in&nulla=tempus&pede=sit&ullamcorper=amet&augue=sem&a=fusce&suscipit=consequat&nulla=nulla&elit=nisl&ac=nunc&nulla=nisl&sed=duis&vel=bibendum&enim=felis&sit=sed&amet=interdum&nunc=venenatis&viverra=turpis&dapibus=enim&nulla=blandit&suscipit=mi&ligula=in&in=porttitor&lacus=pede&curabitur=justo&at=eu&ipsum=massa&ac=donec", "tags": ["Action|Adventure", "Drama|Fantasy", "Drama|Horror|War", "Drama|Romance", "Documentary"] },
    { "id": "5a50c9fd-febd-4656-83e8-02648f44e237", "title": "Dinner, The (Diner, Het)", "year": 1998, "cover": "http://dummyimage.com/180x145.jpg/dddddd/000000", "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "duration": 85, "contentRating": "PG", "sourcer": "https://wiley.com/vestibulum/ante/ipsum.xml?integer=mauris&ac=viverra&neque=diam&duis=vitae&bibendum=quam&morbi=suspendisse&non=potenti&quam=nullam&nec=porttitor&dui=lacus&luctus=at&rutrum=turpis&nulla=donec&tellus=posuere&in=metus&sagittis=vitae&dui=ipsum&vel=aliquam&nisl=non&duis=mauris&ac=morbi&nibh=non&fusce=lectus&lacus=aliquam&purus=sit&aliquet=amet&at=diam&feugiat=in&non=magna&pretium=bibendum&quis=imperdiet&lectus=nullam&suspendisse=orci&potenti=pede&in=venenatis&eleifend=non&quam=sodales&a=sed&odio=tincidunt&in=eu&hac=felis&habitasse=fusce&platea=posuere&dictumst=felis&maecenas=sed&ut=lacus", "tags": ["Drama|Mystery|Romance|Thriller", "Documentary"] },
    { "id": "50820ddc-f9db-4c0f-b186-3b7293b8f4a9", "title": "Cremator, The (Spalovac mrtvol)", "year": 2011, "cover": "http://dummyimage.com/240x226.png/cc0000/ffffff", "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.", "duration": 65, "contentRating": "G", "sourcer": "https://house.gov/consectetuer/adipiscing/elit/proin/risus.jpg?et=ornare&ultrices=consequat&posuere=lectus&cubilia=in&curae=est&duis=risus&faucibus=auctor&accumsan=sed&odio=tristique&curabitur=in&convallis=tempus&duis=sit&consequat=amet&dui=sem&nec=fusce&nisi=consequat&volutpat=nulla&eleifend=nisl&donec=nunc&ut=nisl&dolor=duis&morbi=bibendum&vel=felis&lectus=sed&in=interdum&quam=venenatis&fringilla=turpis&rhoncus=enim&mauris=blandit&enim=mi&leo=in&rhoncus=porttitor&sed=pede&vestibulum=justo&sit=eu&amet=massa&cursus=donec&id=dapibus&turpis=duis&integer=at&aliquet=velit&massa=eu&id=est&lobortis=congue&convallis=elementum&tortor=in&risus=hac&dapibus=habitasse&augue=platea&vel=dictumst&accumsan=morbi&tellus=vestibulum&nisi=velit&eu=id&orci=pretium&mauris=iaculis&lacinia=diam&sapien=erat&quis=fermentum&libero=justo&nullam=nec&sit=condimentum&amet=neque&turpis=sapien&elementum=placerat&ligula=ante&vehicula=nulla&consequat=justo&morbi=aliquam&a=quis&ipsum=turpis&integer=eget&a=elit&nibh=sodales&in=scelerisque&quis=mauris&justo=sit&maecenas=amet&rhoncus=eros&aliquam=suspendisse&lacus=accumsan&morbi=tortor&quis=quis&tortor=turpis&id=sed&nulla=ante&ultrices=vivamus&aliquet=tortor&maecenas=duis&leo=mattis&odio=egestas&condimentum=metus&id=aenean&luctus=fermentum&nec=donec&molestie=ut", "tags": ["Comedy|Drama|Romance"] },
    { "id": "4354f6ac-bb09-4a48-abd1-93cc6ab44440", "title": "20 Years After", "year": 2007, "cover": "http://dummyimage.com/129x170.png/5fa2dd/ffffff", "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "duration": 64, "contentRating": "PG-13", "sourcer": "http://sun.com/nulla/neque/libero/convallis/eget/eleifend.png?lorem=pellentesque&quisque=ultrices&ut=phasellus&erat=id&curabitur=sapien&gravida=in&nisi=sapien&at=iaculis&nibh=congue&in=vivamus&hac=metus&habitasse=arcu&platea=adipiscing&dictumst=molestie&aliquam=hendrerit&augue=at&quam=vulputate&sollicitudin=vitae&vitae=nisl&consectetuer=aenean&eget=lectus&rutrum=pellentesque&at=eget&lorem=nunc&integer=donec&tincidunt=quis&ante=orci&vel=eget&ipsum=orci&praesent=vehicula&blandit=condimentum&lacinia=curabitur&erat=in&vestibulum=libero&sed=ut&magna=massa&at=volutpat&nunc=convallis&commodo=morbi&placerat=odio&praesent=odio&blandit=elementum&nam=eu&nulla=interdum&integer=eu&pede=tincidunt&justo=in&lacinia=leo&eget=maecenas&tincidunt=pulvinar&eget=lobortis&tempus=est&vel=phasellus&pede=sit&morbi=amet&porttitor=erat&lorem=nulla&id=tempus&ligula=vivamus&suspendisse=in&ornare=felis&consequat=eu&lectus=sapien&in=cursus&est=vestibulum&risus=proin&auctor=eu&sed=mi&tristique=nulla&in=ac&tempus=enim&sit=in&amet=tempor&sem=turpis&fusce=nec&consequat=euismod&nulla=scelerisque&nisl=quam&nunc=turpis&nisl=adipiscing&duis=lorem&bibendum=vitae&felis=mattis&sed=nibh&interdum=ligula&venenatis=nec&turpis=sem&enim=duis&blandit=aliquam&mi=convallis", "tags": ["Crime|Documentary", "Adventure|Children|Drama", "Drama", "Drama|War", "Comedy"] },
    { "id": "73e8d5c9-185e-4f62-9b45-45994153ec73", "title": "The Woman in Black 2: Angel of Death", "year": 1998, "cover": "http://dummyimage.com/133x126.png/dddddd/000000", "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "duration": 9, "contentRating": "PG-13", "sourcer": "https://weather.com/sagittis/dui/vel/nisl/duis/ac/nibh.jsp?consequat=commodo&metus=vulputate&sapien=justo&ut=in&nunc=blandit&vestibulum=ultrices&ante=enim&ipsum=lorem&primis=ipsum&in=dolor&faucibus=sit&orci=amet&luctus=consectetuer&et=adipiscing&ultrices=elit&posuere=proin&cubilia=interdum&curae=mauris&mauris=non&viverra=ligula&diam=pellentesque&vitae=ultrices&quam=phasellus&suspendisse=id&potenti=sapien&nullam=in&porttitor=sapien&lacus=iaculis&at=congue&turpis=vivamus&donec=metus&posuere=arcu&metus=adipiscing&vitae=molestie&ipsum=hendrerit&aliquam=at&non=vulputate&mauris=vitae&morbi=nisl&non=aenean&lectus=lectus&aliquam=pellentesque&sit=eget&amet=nunc&diam=donec&in=quis&magna=orci&bibendum=eget&imperdiet=orci&nullam=vehicula&orci=condimentum&pede=curabitur&venenatis=in&non=libero&sodales=ut&sed=massa&tincidunt=volutpat&eu=convallis&felis=morbi&fusce=odio&posuere=odio&felis=elementum&sed=eu&lacus=interdum&morbi=eu&sem=tincidunt&mauris=in&laoreet=leo&ut=maecenas&rhoncus=pulvinar&aliquet=lobortis&pulvinar=est&sed=phasellus&nisl=sit&nunc=amet&rhoncus=erat&dui=nulla&vel=tempus&sem=vivamus&sed=in&sagittis=felis&nam=eu&congue=sapien&risus=cursus&semper=vestibulum&porta=proin&volutpat=eu&quam=mi&pede=nulla&lobortis=ac&ligula=enim&sit=in&amet=tempor&eleifend=turpis", "tags": ["Drama", "Crime|Drama|Thriller", "Action|Crime"] },
    { "id": "8c560b59-d250-462f-ad6e-5aad631a0db0", "title": "The Hatchet Man", "year": 1999, "cover": "http://dummyimage.com/240x178.jpg/5fa2dd/ffffff", "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.", "duration": 36, "contentRating": "G", "sourcer": "https://blogspot.com/sit/amet/cursus/id/turpis.jsp?mi=vivamus&nulla=tortor&ac=duis&enim=mattis&in=egestas&tempor=metus&turpis=aenean&nec=fermentum&euismod=donec&scelerisque=ut&quam=mauris&turpis=eget&adipiscing=massa&lorem=tempor&vitae=convallis&mattis=nulla&nibh=neque&ligula=libero&nec=convallis&sem=eget&duis=eleifend&aliquam=luctus&convallis=ultricies&nunc=eu&proin=nibh&at=quisque&turpis=id&a=justo&pede=sit&posuere=amet&nonummy=sapien&integer=dignissim&non=vestibulum&velit=vestibulum&donec=ante&diam=ipsum&neque=primis&vestibulum=in&eget=faucibus&vulputate=orci&ut=luctus&ultrices=et&vel=ultrices&augue=posuere&vestibulum=cubilia&ante=curae&ipsum=nulla&primis=dapibus&in=dolor&faucibus=vel&orci=est&luctus=donec&et=odio&ultrices=justo&posuere=sollicitudin&cubilia=ut&curae=suscipit&donec=a&pharetra=feugiat&magna=et&vestibulum=eros&aliquet=vestibulum&ultrices=ac&erat=est&tortor=lacinia&sollicitudin=nisi&mi=venenatis&sit=tristique&amet=fusce&lobortis=congue&sapien=diam&sapien=id&non=ornare&mi=imperdiet&integer=sapien&ac=urna&neque=pretium&duis=nisl&bibendum=ut&morbi=volutpat&non=sapien&quam=arcu&nec=sed&dui=augue&luctus=aliquam&rutrum=erat&nulla=volutpat&tellus=in", "tags": ["Drama|Romance", "Drama", "Action|Crime|Drama", "Drama", "Sci-Fi"] },
    { "id": "11debe20-6213-45a4-bc99-fc3905ba98a2", "title": "Girl with the Dragon Tattoo, The (Män som hatar kvinnor)", "year": 1993, "cover": "http://dummyimage.com/231x148.jpg/5fa2dd/ffffff", "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "duration": 35, "contentRating": "PG-13", "sourcer": "https://archive.org/eu/massa.jpg?sapien=volutpat&a=in&libero=congue&nam=etiam&dui=justo&proin=etiam&leo=pretium&odio=iaculis&porttitor=justo&id=in&consequat=hac&in=habitasse&consequat=platea&ut=dictumst&nulla=etiam&sed=faucibus&accumsan=cursus&felis=urna&ut=ut&at=tellus&dolor=nulla&quis=ut&odio=erat&consequat=id&varius=mauris&integer=vulputate&ac=elementum&leo=nullam&pellentesque=varius&ultrices=nulla&mattis=facilisi&odio=cras&donec=non&vitae=velit&nisi=nec&nam=nisi&ultrices=vulputate&libero=nonummy&non=maecenas&mattis=tincidunt&pulvinar=lacus&nulla=at&pede=velit&ullamcorper=vivamus&augue=vel&a=nulla&suscipit=eget&nulla=eros&elit=elementum&ac=pellentesque&nulla=quisque&sed=porta&vel=volutpat&enim=erat&sit=quisque&amet=erat&nunc=eros&viverra=viverra&dapibus=eget&nulla=congue&suscipit=eget&ligula=semper&in=rutrum&lacus=nulla&curabitur=nunc&at=purus&ipsum=phasellus&ac=in&tellus=felis&semper=donec", "tags": ["Drama"] },
    { "id": "4c52a43c-2ae9-45f4-9b7c-4f29452d0465", "title": "Shouting Fire: Stories from the Edge of Free Speech", "year": 1994, "cover": "http://dummyimage.com/249x228.bmp/dddddd/000000", "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", "duration": 74, "contentRating": "G", "sourcer": "https://sun.com/nullam/varius/nulla/facilisi/cras/non/velit.aspx?orci=dolor&eget=morbi&orci=vel&vehicula=lectus", "tags": ["Horror|Mystery", "Drama|Romance"] },
    { "id": "a00e9eb8-22a0-4420-807d-38f0db9d9702", "title": "Black on White (Mustaa valkoisella)", "year": 2010, "cover": "http://dummyimage.com/152x113.bmp/5fa2dd/ffffff", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "duration": 39, "contentRating": "R", "sourcer": "http://mit.edu/in/congue/etiam/justo/etiam/pretium/iaculis.xml?orci=ultrices&mauris=posuere&lacinia=cubilia&sapien=curae&quis=donec&libero=pharetra&nullam=magna&sit=vestibulum&amet=aliquet&turpis=ultrices&elementum=erat&ligula=tortor&vehicula=sollicitudin&consequat=mi&morbi=sit&a=amet&ipsum=lobortis&integer=sapien&a=sapien&nibh=non&in=mi&quis=integer&justo=ac&maecenas=neque&rhoncus=duis&aliquam=bibendum&lacus=morbi&morbi=non&quis=quam&tortor=nec&id=dui&nulla=luctus&ultrices=rutrum&aliquet=nulla&maecenas=tellus&leo=in&odio=sagittis&condimentum=dui&id=vel&luctus=nisl&nec=duis&molestie=ac&sed=nibh&justo=fusce&pellentesque=lacus&viverra=purus&pede=aliquet&ac=at&diam=feugiat&cras=non&pellentesque=pretium&volutpat=quis&dui=lectus&maecenas=suspendisse&tristique=potenti&est=in&et=eleifend&tempus=quam&semper=a&est=odio", "tags": ["Drama", "Crime|Drama"] },
    { "id": "740aefad-6b72-4aab-b2fc-5f5bdac3ca55", "title": "Just a Little Harmless Sex", "year": 2006, "cover": "http://dummyimage.com/190x121.jpg/5fa2dd/ffffff", "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.", "duration": 37, "contentRating": "G", "sourcer": "http://blogs.com/orci/luctus/et.png?congue=cursus", "tags": ["Crime", "Comedy", "Documentary"] }]

module.exports = {
    moviesMock
};
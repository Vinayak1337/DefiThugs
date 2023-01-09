- File
    POST     \file - To upload a file with file property
    GET      \file\:filename - To download/get a uploaded file with file name

- Item
    POST     \item - To create an item
    GET      \item\:id - To an item with id
    DELETE   \item\:id - To delete an item with id
    PUT      \item\:id\buy - To buy an item with id 
            - required properties in body:
                - owner: _id of the user 
                - id: _id of the item
           (it changes properties sold to true and listed to false)
    PUT      \item\:id\list - To list an item/nft with id 
    PUT      \item\:id\un-list - To un-list an item/nft with id 

- Items
    POST     \items = To get items filtered by query
            - required query
            type: image | music | book
            limit = number of items to return
            page = page number

any/:id - required id is the _id of the item/nft/user not the address or tokenId


		name: String -required
		description: String -required
		price: Number -required
		thumbnail: String -optional
		item: String -required (link or uri/url of the nft)
		type:  String -required -accepts only: (image | music | book)
		sold: Boolean -default: false 
		owner: type: String (_id of the user) -default: null (no owner)
		tokenId:String -required -unique
		listed: Boolean -default: false
        createdAt: Date -optional
        updatedAt: Date -optional
	
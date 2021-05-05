import requests 
# from notion.client import NotionClient

# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in (non-guest) session on Notion.so
# client = NotionClient(token_v2="5b3cecb94259070c102f184ef493214e6649ce1e20b084b3893a4bb745816ae7f46999e49f30b12662a540ff2b9705ac1a0433ec05870ffc8b2f4c045986bc61b6ab2d836b68a8710ff19b009089")

# Replace this URL with the URL of the page you want to edit
# page = client.get_block("https://www.notion.so/Emilio-Baz-n-00e8f848602b4a3d8b03941fc7be52bf")

# print("The old title is:", page.title)

# Note: You can use Markdown! We convert on-the-fly to Notion's internal formatted text data structure.
# page.title = "Emilio Bazán"

cookies_dict = {"token_v2": "5b3cecb94259070c102f184ef493214e6649ce1e20b084b3893a4bb745816ae7f46999e49f30b12662a540ff2b9705ac1a0433ec05870ffc8b2f4c045986bc61b6ab2d836b68a8710ff19b009089"}
response = requests	.get("https://www.notion.so/Emilio-Baz-n-00e8f848602b4a3d8b03941fc7be52bf", cookies=cookies_dict)


print(response.text)
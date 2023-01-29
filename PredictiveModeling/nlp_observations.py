from google.cloud import language_v1
import pandas as pd

result = []
def sample_analyze_entities(text_content):
    client = language_v1.LanguageServiceClient()

    type_ = language_v1.Document.Type.PLAIN_TEXT
    language = "en"
    document = {"content": text_content, "type_": type_, "language": language}

    encoding_type = language_v1.EncodingType.UTF8

    response = client.analyze_entities(
        request={"document": document, "encoding_type": encoding_type}
    )
    found = False
    for entity in response.entities:
        if language_v1.Entity.Type(entity.type_).name == "LOCATION":
            print("Representative name for the entity: {}".format(entity.name))
            print("Entity type: {}".format(language_v1.Entity.Type(entity.type_).name))
            print("Salience score: {}".format(entity.salience))

            found = True
            result.append(entity.name)
            break
    if not found:
        result.append("?")


df = pd.read_excel(".xlsx")


for idx, text in df['Environment'].iteritems():
    if idx > 10000:
        break
    if pd.isnull(text):
        result.append("?")
        continue
    # #  # #sample_analyze_entities(text)


new_df = df.append(pd.DataFrame({'Output': result}), ignore_index=False)
new_df.to_excel("output.xlsx")
print("RESULT")
print(result)


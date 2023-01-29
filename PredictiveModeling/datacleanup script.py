import pandas as pd

month_to_num = {
    "January" : 1,
    "February" : 2,
    "March" : 3,
    "April" : 4,
    "May" : 5,
    "June" : 6,
    "July" : 7,
    "August" : 8,
    "September" : 9,
    "October" : 10,
    "November" : 11,
    "December" : 12
}
df = pd.read_excel("data.xlsx")
for idx, val in df['Year'].iteritems():
    print(val)
    if str(val).isnumeric():
        continue
    elif pd.isnull(val):
        continue
    new_val = []
    for c in str(val):
        if c.isdigit():
            new_val.append(c)
    # val = int("".join(new_val))
    cleaned_val = int("".join(new_val))
    df.at[idx, 'Year'] = cleaned_val

df.to_excel("cleaner_data.xlsx")


df = pd.read_excel("data.xlsx")

for idx, month in df['Month'].iteritems():
    if pd.isnull(month):
        df.at[idx, 'Month'] = 0
        continue
    df.at[idx, 'Month'] = month_to_num[month]

df.to_excel("clean_data.xlsx")

from django import forms


class SearchForm(forms.Form):
    search = forms.CharField(label="Keyword", max_length=100)

from django.conf.urls import url, include
from api.views import ResultViewSet


result_list = ResultViewSet.as_view({
    'get': 'list'
})

result_add = ResultViewSet.as_view({
    'post': 'create'
})

urlpatterns = [
    url(r'^results/$', result_list, name='result-list'),
    url(r'^results/add/$', result_add, name='result-add'),
]

<p>
<a href="https://github.com/TaekGeunLee/study_JS-remaster-/blob/master/algorithm%20tranning/basic/hash.md">해쉬 테이블</a>을 구성하여 CRUD 하는 프로그램을 만들어보자.
</p>

### plan
* 해쉬 테이블에 해당하는 클래스(hashTable)를 구축한다. 3개의 프로퍼티(bucket, length, size)와 복수의 메서드를 지니고 있다.
* 테이블에 key 값을 넣고(insert) 제거(remove) 하고 조회(read) 하는 등 기본적인 기능을 가진 메서드를 만든다. (version 2)
* 왠만하면 객체로 구현하지 말 것.

### log

* version 1 : keys를 hash 테이블에 배치하는 코드 구현. 해시 충돌에 대한 대책은 아직 못함.
* version 2 : 클래스 hashTable의 메서드, insertKey() 추가. 해당 메서드는 인자로 받은 key가 테이블에 할당됨.
* version 3 : 클래스 hashTable의 메서드, insertKey() 완성.
* version 4 : 메서드 setTable(), dropKey() 구현.